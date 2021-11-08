import "style/bannerSection.scss";

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
        link="/tao-hinh-di-vuc-cua-sao-trung-banh-tieu-nhiem-van-dinh-cua-chop-trieu-le-dinh-mat-diem-vi-long-may-nhiet-ba-bi-soan-ngoi-boi-2-dong-huong"
        title='Tạo hình dị vực của sao Trung: Bành Tiểu Nhiễm vẫn "đỉnh của chóp", Triệu Lệ Dĩnh mất điểm vì lông mày, Nhiệt Ba bị soán ngôi bởi 2 đồng hương'
        image="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/52426857529098130918556505237438482874368n-1628758242733244696967.jpg"
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
