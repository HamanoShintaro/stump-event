export function getRouteStats(route: any) {
  // DBにカラムがあればそれを使い、なければIDから決まった乱数（モック）を生成する
  if (route.participants_count !== undefined && route.favorites_count !== undefined) {
    return {
      participants: route.participants_count,
      favorites: route.favorites_count
    };
  }

  if (!route.id) {
    return { participants: 0, favorites: 0 };
  }

  let hash = 0;
  for (let i = 0; i < route.id.length; i++) {
    hash = route.id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const positiveHash = Math.abs(hash);
  
  return {
    participants: (positiveHash % 850) + 150, // 150 ~ 999
    favorites: (positiveHash % 350) + 50      // 50 ~ 399
  };
}
