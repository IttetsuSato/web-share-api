"use client";

import { useCallback } from "react";

export const ShareButton = () => {
  const handleClick = useCallback(() => {
    const url = window.location.origin;

    void (async () => {
      if (navigator.share) {
        // Web share API
        await navigator.share({
          title: "タイトル",
          url,
        });
      } else {
        // Web Share APIが使えないブラウザの処理
        await navigator.clipboard.writeText(url);
        alert("URLをコピーしました");
      }
    })();
  }, []);

  return <button onClick={handleClick}>urlを共有する</button>;
};
