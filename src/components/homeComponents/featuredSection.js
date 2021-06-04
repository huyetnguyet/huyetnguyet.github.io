import React from "react";
import "./featuredSection.css";
import { AdsFeaturdSection } from "../adsMethods";

function ContentItem(props) {
  return (
    <div className="grip_6">
      <img src={props.src} alt="images" class="img_inner"></img>
      <div className="featuredText">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>
      <a href={props.link} class="featuredBtn">
        read more
      </a>
    </div>
  );
}

function FeaturedContainer() {
  return (
    <>
      <ContentItem
        title="2 game miễn phí cho PlayStation 4 trong tháng 6"
        content="Với 2 trò chơi này, game thủ PS4 sẽ thoải mái giải trí trong những ngày nghỉ hè dài sắp tới."
        src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-1622718503123169428884.jpg"
        link="/2-game-mien-phi-cho-playstation-4-trong-thang-6"
      />
      <ContentItem
        title="Đại gia Đức Huy lộ hint du lịch với tình trẻ kém 27 tuổi..."
        content="Dù đã đăng ảnh cách nhau cả 4 - 5 ngày nhưng hint hẹn hò của đại gia Đức Huy và tình tin đồn kém 27 tuổi..."
        src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/3/0-1622697731272517784711.jpg"
        link="/dai-gia-duc-huy-lo-hint-du-lich-voi-tinh-tre-kem-27-tuoi-chinh-la-dia-diem-tuyen-bo-khong-co-em-anh-co-em-khac"
      />
      <AdsFeaturdSection />
      <ContentItem
        title="Bị chế giễu vì nặng tới 1 tạ, nữ YouTuber giảm 30kg..."
        content="Hành trình biến đổi nhan sắc của cô nàng YouTuber này không khỏi khiến cho các đấng mày râu phải lác mắt."
        src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/23/photo-1-1621763998246465890053.png"
        link="/bi-che-gieu-vi-nang-toi-1-ta-nu-youtuber-giam-30kg-than-toc-lot-xac-goi-cam-toi-kho-tin"
      />
    </>
  );
}

export default function FeaturedSection() {
  return (
    <div>
      <div className="featuredSection">
        <div className="featuredContainer">
          <div className="grip_24">
            <h2>Lastest Updates</h2>
          </div>
          <div className="featuredContent">
            <FeaturedContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
