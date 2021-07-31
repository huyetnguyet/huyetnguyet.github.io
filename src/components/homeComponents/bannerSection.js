import React from "react";
import "components/homeComponents/bannerSection.css";

function Banner(props) {
  return (
    <a href={props.link}>
      <img src={props.image} alt="images"></img>
      <div className="contentText">
        <span>{props.title.substring(0, 50)}</span>
      </div>
    </a>
  );
}

export default function BannereSection() {
  return (
    <div className="bannerSection">
      <Banner
        link="/hot-girl-le-phuong-anh-dang-hot-ran-ran-tren-mang-la-ai"
        title="Hot girl Lê Phương Anh đang hot rần rần trên mạng là ai?"
        image="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/1742548851284859431909811985173040770867015n-16277027190401799624308.jpg"
      ></Banner>
      <Banner
        link="/chet-chim-voi-be-visual-bung-no-cua-canh-sat-krystal-o-phim-moi-netizen-dua-bat-em-di-chi-oi"
        title='Chết chìm với bể visual bùng nổ của "cảnh sát" Krystal ở phim mới, netizen đùa "bắt em đi chị ơi"'
        image="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/31/2237122058783872030332062401946223716323604n-16277120661511418042355.jpg"
      ></Banner>
      <Banner
        link="/nhung-tua-game-open-world-nhe-tua-long-hong-cho-game-thu-quay-tren-pc-ram-2-3gb"
        title="Những tựa game open world nhẹ tựa lông hồng cho game thủ quẩy trên PC RAM 2-3GB"
        image="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/download-fallout-3-chan-hadoan-tv-1627639323881466400762.jpg"
      ></Banner>
    </div>
  );
}
