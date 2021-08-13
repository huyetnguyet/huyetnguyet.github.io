import React from "react";
import "./bannerSection.scss";

function Banner(props) {
  return (
    <a href={props.link}>
      <img src={props.image} alt="images"></img>
      <div className="contentText">
        <span>{props.title.substring(0, 50)}... </span>
      </div>
    </a>
  );
}

export default function BannereSection() {
  return (
    <div className="bannerSection">
      <Banner
        link="/loat-phot-noi-dai-cua-jack-thai-do-sao-hang-a-nghi-van-noi-xau-son-tung-viruss-nhung-scandal-co-con-rieng-moi-gay-soc-toan-tap"
        title='Loạt "phốt" nối dài của Jack: Thái độ sao hạng A, nghi vấn nói xấu Sơn Tùng - ViruSs nhưng scandal có con riêng mới gây sốc toàn tập'
        image="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/ngang-16283990842111177526433.png"
      ></Banner>
      <Banner
        link="/toan-canh-24-gio-bung-no-be-boi-chan-dong-cua-jack-thien-an-va-2-co-gai-to-cao-lien-hoan-chieu-thuc-tan-gai-va-cuoc-goi-doi-chat-gay-soc"
        title="Toàn cảnh 24 giờ bùng nổ bê bối chấn động của Jack: Thiên An và 2 cô gái tố cáo liên hoàn, chiêu thức tán gái và cuộc gọi đối chất gây sốc"
        image="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/fb-1628440838583422351702.png"
      ></Banner>
      <Banner
        link="/the-suicide-squad-tang-lop-can-ba-cua-sieu-anh-hung-lam-nen-dieu-marvel-chac-chan-se-choi-tu"
        title="The Suicide Squad: Tầng lớp cặn bã của siêu anh hùng làm nên điều Marvel chắc chắn sẽ chối từ"
        image="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/ngang-16284211045481640544690.png"
      ></Banner>
    </div>
  );
}
