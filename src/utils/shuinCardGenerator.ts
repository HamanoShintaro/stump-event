import { ShuinDiaryEvent } from "@/hooks/useShuinBook";
import { getCategoryStampUrl } from "@/utils/stampHelper";

export interface ShuinCardOptions {
  photoUrl?: string | null;
  memo?: string | null;
  companions?: string[];
}

function loadSafeImage(url: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    if (!url || typeof window === "undefined") {
      resolve(null);
      return;
    }
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        // Test on a 1x1 offscreen canvas to ensure it does not taint canvas
        const testCanvas = document.createElement("canvas");
        testCanvas.width = 1;
        testCanvas.height = 1;
        const testCtx = testCanvas.getContext("2d");
        if (testCtx) {
          testCtx.drawImage(img, 0, 0, 1, 1);
          testCanvas.toDataURL("image/png");
        }
        resolve(img);
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

function wrapTextLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number
): string[] {
  const cleaned = text.replace(/\r?\n/g, " ").trim();
  if (!cleaned) return [];
  const chars = Array.from(cleaned);
  const lines: string[] = [];
  let currentLine = "";

  for (let i = 0; i < chars.length; i++) {
    const testLine = currentLine + chars[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine.length > 0) {
      lines.push(currentLine);
      currentLine = chars[i];
      if (lines.length >= maxLines) {
        const lastIdx = lines.length - 1;
        lines[lastIdx] = lines[lastIdx].slice(0, Math.max(1, lines[lastIdx].length - 1)) + "…";
        return lines;
      }
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    if (lines.length < maxLines) {
      lines.push(currentLine);
    } else if (lines.length > 0) {
      const lastIdx = lines.length - 1;
      lines[lastIdx] = lines[lastIdx].slice(0, Math.max(1, lines[lastIdx].length - 1)) + "…";
    }
  }
  return lines;
}

function drawCornerOrnament(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  dirX: 1 | -1,
  dirY: 1 | -1
) {
  ctx.save();
  ctx.strokeStyle = "#C9A84C";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x, y + dirY * size);
  ctx.lineTo(x, y);
  ctx.lineTo(x + dirX * size, y);
  ctx.stroke();

  const inner = size * 0.45;
  ctx.strokeStyle = "#C7442E";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + dirX * 10, y + dirY * (10 + inner));
  ctx.lineTo(x + dirX * 10, y + dirY * 10);
  ctx.lineTo(x + dirX * (10 + inner), y + dirY * 10);
  ctx.stroke();
  ctx.restore();
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

/**
 * SHUIN帳の1件の来訪記録（ShuinDiaryEvent）から
 * 和紙風・高解像度（1080x1350px, 4:5）の記念御朱印紙面カード画像（PNG Data URL）を生成する
 */
export async function generateShuinCardDataUrl(
  event: ShuinDiaryEvent,
  options?: ShuinCardOptions
): Promise<string> {
  const width = 1080;
  const height = 1350;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas 2D context is not available");
  }

  // 1. 和紙グラデーション背景 & 繊維テクスチャ
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, "#FFFDF9");
  bgGrad.addColorStop(0.5, "#F7F3EA");
  bgGrad.addColorStop(1, "#F2ECE0");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // 和紙の微細な横目・繊維模様
  ctx.save();
  ctx.strokeStyle = "rgba(201, 168, 76, 0.08)";
  ctx.lineWidth = 1;
  for (let y = 24; y < height; y += 18) {
    ctx.beginPath();
    ctx.moveTo(36, y);
    ctx.lineTo(width - 36, y + ((y % 36 === 0) ? 2 : -2));
    ctx.stroke();
  }
  // 淡い朱と金の霞装飾
  const topGlow = ctx.createRadialGradient(width / 2, 340, 20, width / 2, 340, 380);
  topGlow.addColorStop(0, "rgba(199, 68, 46, 0.07)");
  topGlow.addColorStop(1, "rgba(199, 68, 46, 0)");
  ctx.fillStyle = topGlow;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();

  // 2. 二重額縁（黄金 & 朱色）＋ 四隅の飾り金具
  ctx.save();
  ctx.strokeStyle = "#C9A84C";
  ctx.lineWidth = 4;
  ctx.strokeRect(42, 42, width - 84, height - 84);

  ctx.strokeStyle = "#C7442E";
  ctx.lineWidth = 2;
  ctx.strokeRect(56, 56, width - 112, height - 112);

  drawCornerOrnament(ctx, 42, 42, 46, 1, 1);
  drawCornerOrnament(ctx, width - 42, 42, 46, -1, 1);
  drawCornerOrnament(ctx, 42, height - 42, 46, 1, -1);
  drawCornerOrnament(ctx, width - 42, height - 42, 46, -1, -1);
  ctx.restore();

  // 3. ヘッダー情報（参拝・来訪日時、エリア、来訪者番号、再訪印）
  const visitDate = new Date(event.created_at);
  const dateStr = `${visitDate.getFullYear()}年${visitDate.getMonth() + 1}月${visitDate.getDate()}日`;
  const timeStr = visitDate.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // 上部サブタイトル
  ctx.save();
  ctx.fillStyle = "#8A7E72";
  ctx.font = "700 22px 'Noto Serif JP', 'Yu Mincho', serif";
  ctx.textAlign = "center";
  ctx.fillText("― まちのしるし 御朱印紙面 ―", width / 2, 110);

  // 来訪日時
  ctx.fillStyle = "#5C4E43";
  ctx.font = "800 28px 'Noto Serif JP', 'Yu Mincho', serif";
  ctx.fillText(`${dateStr}  ${timeStr}`, width / 2, 154);

  // バッジ行（エリア / 第N番のしるし / 再訪N度目）
  const badges: { text: string; bg: string; border: string; color: string }[] = [];
  if (event.spotAreaLabel) {
    badges.push({
      text: `📍 ${event.spotAreaLabel}`,
      bg: "rgba(201, 168, 76, 0.14)",
      border: "#C9A84C",
      color: "#6E5314",
    });
  }
  if (event.visitor_number) {
    badges.push({
      text: `第 ${event.visitor_number} 番のしるし`,
      bg: "rgba(199, 68, 46, 0.08)",
      border: "#C7442E",
      color: "#C7442E",
    });
  }
  if (event.visitOrder && event.visitOrder > 1) {
    badges.push({
      text: `再訪 ${event.visitOrder}度目`,
      bg: "rgba(201, 168, 76, 0.22)",
      border: "#C9A84C",
      color: "#6E5314",
    });
  }

  if (badges.length > 0) {
    ctx.font = "800 22px 'Noto Sans JP', sans-serif";
    const gap = 16;
    const badgeWidths = badges.map((b) => ctx.measureText(b.text).width + 36);
    const totalW = badgeWidths.reduce((a, b) => a + b, 0) + gap * (badges.length - 1);
    let startX = (width - totalW) / 2;
    const badgeY = 178;
    const badgeH = 42;

    badges.forEach((b, idx) => {
      const bw = badgeWidths[idx];
      drawRoundedRect(ctx, startX, badgeY, bw, badgeH, 21);
      ctx.fillStyle = b.bg;
      ctx.fill();
      ctx.strokeStyle = b.border;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = b.color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(b.text, startX + bw / 2, badgeY + badgeH / 2 + 1);
      startX += bw + gap;
    });
  }
  ctx.restore();

  // 4. センターピース：朱印影 ＋ スポット名 ＋ ルート名
  const stampUrl = getCategoryStampUrl(event.category);
  const stampImg = await loadSafeImage(stampUrl);

  const centerY = 365;
  const stampRadius = 112;

  ctx.save();
  // 朱印の背面円座
  ctx.beginPath();
  ctx.arc(width / 2, centerY, stampRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#FFFDF9";
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.setLineDash([8, 6]);
  ctx.strokeStyle = "#C7442E";
  ctx.stroke();
  ctx.setLineDash([]);

  if (stampImg) {
    const drawSize = stampRadius * 1.72;
    ctx.drawImage(
      stampImg,
      width / 2 - drawSize / 2,
      centerY - drawSize / 2,
      drawSize,
      drawSize
    );
  } else {
    // フォールバックの朱印紋
    ctx.beginPath();
    ctx.arc(width / 2, centerY, stampRadius - 14, 0, Math.PI * 2);
    ctx.strokeStyle = "#C7442E";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "#C7442E";
    ctx.font = "900 54px 'Noto Serif JP', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("しるし", width / 2, centerY);
  }
  ctx.restore();

  // スポット名（筆致風セリフ体）
  ctx.save();
  ctx.fillStyle = "#2C221E";
  ctx.font = "900 46px 'Noto Serif JP', 'Yu Mincho', serif";
  ctx.textAlign = "center";
  const spotLines = wrapTextLines(ctx, event.spotName || "スポット", width - 180, 2);
  let cursorY = 535;
  spotLines.forEach((line) => {
    ctx.fillText(line, width / 2, cursorY);
    cursorY += 56;
  });

  // 巡ったルート名
  if (event.routeName) {
    ctx.fillStyle = "#8A7E72";
    ctx.font = "700 24px 'Noto Sans JP', sans-serif";
    const routeLines = wrapTextLines(ctx, `巡ったルート：${event.routeName}`, width - 200, 1);
    if (routeLines[0]) {
      ctx.fillText(routeLines[0], width / 2, cursorY + 4);
      cursorY += 42;
    }
  }
  ctx.restore();

  // 5. 思い出セクション（写真・あとがき／物語断片・連れ立ち）
  const effectivePhotoUrl =
    options?.photoUrl !== undefined
      ? options.photoUrl
      : event.photo_url || event.sharedPhotoUrl || null;
  const effectiveMemo =
    options?.memo !== undefined
      ? options.memo
      : event.memo || event.sharedMemoText || null;
  const effectiveCompanions =
    options?.companions && options.companions.length > 0
      ? options.companions
      : event.companionNames || [];

  const loadedPhoto = effectivePhotoUrl ? await loadSafeImage(effectivePhotoUrl) : null;

  if (loadedPhoto) {
    // ポラロイド・和紙フレーム付きで写真を描画
    const frameW = 720;
    const frameH = 360;
    const frameX = (width - frameW) / 2;
    const frameY = cursorY + 10;

    ctx.save();
    drawRoundedRect(ctx, frameX, frameY, frameW, frameH, 16);
    ctx.fillStyle = "#FFFDF9";
    ctx.fill();
    ctx.strokeStyle = "#D5CBB8";
    ctx.lineWidth = 2;
    ctx.stroke();

    const innerPad = 14;
    const imgX = frameX + innerPad;
    const imgY = frameY + innerPad;
    const imgW = frameW - innerPad * 2;
    const imgH = frameH - innerPad * 2;

    drawRoundedRect(ctx, imgX, imgY, imgW, imgH, 10);
    ctx.clip();

    // object-fit: cover 計算
    const srcRatio = loadedPhoto.width / loadedPhoto.height;
    const dstRatio = imgW / imgH;
    let sx = 0;
    let sy = 0;
    let sw = loadedPhoto.width;
    let sh = loadedPhoto.height;
    if (srcRatio > dstRatio) {
      sw = loadedPhoto.height * dstRatio;
      sx = (loadedPhoto.width - sw) / 2;
    } else {
      sh = loadedPhoto.width / dstRatio;
      sy = (loadedPhoto.height - sh) / 2;
    }
    ctx.drawImage(loadedPhoto, sx, sy, sw, sh, imgX, imgY, imgW, imgH);
    ctx.restore();

    cursorY = frameY + frameH + 28;
  } else {
    cursorY += 16;
  }

  // あとがき（感想メモ）またはスポットの物語断片
  const quoteText = effectiveMemo || event.spotFragment || "";
  const isUserMemo = Boolean(effectiveMemo);

  if (quoteText) {
    const boxW = 820;
    const boxX = (width - boxW) / 2;
    ctx.save();
    ctx.font = isUserMemo
      ? "italic 700 26px 'Noto Serif JP', 'Yu Mincho', serif"
      : "500 24px 'Noto Serif JP', 'Yu Mincho', serif";
    const maxQuoteLines = loadedPhoto ? 3 : 5;
    const quoteLines = wrapTextLines(ctx, `「 ${quoteText} 」`, boxW - 64, maxQuoteLines);
    const lineHeight = 38;
    const boxH = quoteLines.length * lineHeight + 54;

    drawRoundedRect(ctx, boxX, cursorY, boxW, boxH, 14);
    ctx.fillStyle = "rgba(250, 246, 238, 0.92)";
    ctx.fill();
    ctx.strokeStyle = "#C9A84C";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = "#5C4E43";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    quoteLines.forEach((line, idx) => {
      ctx.fillText(line, width / 2, cursorY + 34 + idx * lineHeight);
    });
    ctx.restore();

    cursorY += boxH + 24;
  }

  // 連れ立ちメンバー表記
  if (effectiveCompanions.length > 0 && cursorY < height - 135) {
    ctx.save();
    const compText = `👥 連れ立ち: ${effectiveCompanions.join(" さん、")} さん`;
    ctx.font = "800 23px 'Noto Sans JP', sans-serif";
    const textW = Math.min(width - 180, ctx.measureText(compText).width + 48);
    const pillX = (width - textW) / 2;
    const pillY = cursorY;
    const pillH = 46;

    drawRoundedRect(ctx, pillX, pillY, textW, pillH, 23);
    ctx.fillStyle = "rgba(201, 168, 76, 0.14)";
    ctx.fill();
    ctx.strokeStyle = "#C9A84C";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = "#5C4E43";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(compText, width / 2, pillY + pillH / 2 + 1);
    ctx.restore();
  }

  // 6. フッター（SHUIN まちのしるし — 街を歩いて、しるしを刻む。）
  ctx.save();
  ctx.strokeStyle = "rgba(201, 168, 76, 0.45)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(140, height - 112);
  ctx.lineTo(width - 140, height - 112);
  ctx.stroke();

  ctx.fillStyle = "#C7442E";
  ctx.font = "900 24px 'Noto Serif JP', serif";
  ctx.textAlign = "center";
  ctx.fillText(
    "SHUIN まちのしるし — 街を歩いて、しるしを刻む。",
    width / 2,
    height - 76
  );
  ctx.restore();

  return canvas.toDataURL("image/png");
}
