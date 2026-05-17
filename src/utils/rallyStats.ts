export function getRallyStats(rally: any) {
  // DBにカラムがあればそれを使い、なければIDから決まった乱数（モック）を生成する
  if (rally.participants_count !== undefined && rally.favorites_count !== undefined) {
    return {
      participants: rally.participants_count,
      favorites: rally.favorites_count
    };
  }

  if (!rally.id) {
    return { participants: 0, favorites: 0 };
  }

  let hash = 0;
  for (let i = 0; i < rally.id.length; i++) {
    hash = rally.id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const positiveHash = Math.abs(hash);
  
  return {
    participants: (positiveHash % 850) + 150, // 150 ~ 999
    favorites: (positiveHash % 350) + 50      // 50 ~ 399
  };
}
