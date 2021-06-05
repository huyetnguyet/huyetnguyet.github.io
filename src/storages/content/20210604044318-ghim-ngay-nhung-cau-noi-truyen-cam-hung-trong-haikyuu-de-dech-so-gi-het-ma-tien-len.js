import React from "react";
import "../../components/page.css";
import { AdsHorizontal, AdsVertical } from "../../components/adsMethods";
import { RandomFeature } from "../../components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "../../components/content";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Ghim ngay những câu nói truyền cảm hứng trong Haikyuu!! để 'đếch sợ gì hết' mà tiến lên"
content="Dưới đây là một số câu nói đã tạo nên tiếng vang của anime/manga Haikyuu!!." 
src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227860348861596575077.jpg" 
alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, " 
category="news" 
time="04/06/2021 04:43 PM" 
link="/ghim-ngay-nhung-cau-noi-truyen-cam-hung-trong-haikyuu-de-dech-so-gi-het-ma-tien-len"/>

{title="Ghim ngay những câu nói truyền cảm hứng trong Haikyuu!! để 'đếch sợ gì hết' mà tiến lên",
content="Dưới đây là một số câu nói đã tạo nên tiếng vang của anime/manga Haikyuu!!." ,
src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227860348861596575077.jpg" ,
alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, " ,
category="news" ,
time="04/06/2021 04:43 PM" ,
link="/ghim-ngay-nhung-cau-noi-truyen-cam-hung-trong-haikyuu-de-dech-so-gi-het-ma-tien-len",component="page_20210604044318",
filepath="../storages/content/20210604044318-ghim-ngay-nhung-cau-noi-truyen-cam-hung-trong-haikyuu-de-dech-so-gi-het-ma-tien-len.js"},

Ghim ngay những câu nói truyền cảm hứng trong Haikyuu!! để 'đếch sợ gì hết' mà tiến lên
Dưới đây là một số câu nói đã tạo nên tiếng vang của anime/manga Haikyuu!!.
https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227860348861596575077.jpg
Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, 
news
04/06/2021
04:43 PM
/ghim-ngay-nhung-cau-noi-truyen-cam-hung-trong-haikyuu-de-dech-so-gi-het-ma-tien-len
page_20210604044318
../storages/content/20210604044318-ghim-ngay-nhung-cau-noi-truyen-cam-hung-trong-haikyuu-de-dech-so-gi-het-ma-tien-len.js




<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Ghim ngay những câu nói truyền cảm hứng trong Haikyuu!! để 'đếch sợ gì hết' mà tiến lên";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const date = "04/06/2021";
const time = "04:43 PM";
const description =
  "Dưới đây là một số câu nói đã tạo nên tiếng vang của anime/manga Haikyuu!!.";
const link =
  "ghim-ngay-nhung-cau-noi-truyen-cam-hung-trong-haikyuu-de-dech-so-gi-het-ma-tien-len";
const tagparam = [
  "haikyuu",
  "chang-khong-lo-ti-hon",
  "cau-noi-hay-haikyuu",
  "ukai-keishin",
];
const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tagparam.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_20210604044318() {
  return (
    <>
      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              >
            </div>
            <a href={categoryLink} className="pathName">
              {category}
            </a>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="info">
            <p>
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Thoạt nhìn, Haikyuu!! (Chàng khổng lồ tí hon) có vẻ giống
                    như một bộ truyện tranh thể thao thông thường, kể về một
                    nhóm nam thiếu niên phấn đấu cho ước mơ của họ và một nhân
                    vật chính vượt qua những điều không tưởng nhờ tinh thần đồng
                    đội và nỗ lực. Tuy vậy, thông điệp đằng sau bộ manga này
                    không chỉ là thể thao. Những câu nói trong Haikyuu!! còn là
                    về tinh thần đồng đội, tình bạn và những gì vượt quá giới
                    hạn của bạn, chúng cũng có thể được áp dụng vào cuộc sống
                    khi bạn khó khăn và vấp ngã.
                  </p>
                  <p>
                    Đặc biệt, những câu nói, thông điệp trong bộ manga Haikyuu!!
                    dường như có vẻ đã vươn xa hơn ngoài những mặt sân bóng
                    chuyền và tác động tới nhiều người. Chính vì thế hãy cùng
                    nhau điểm lại những câu nói ấn tượng trong series thể thao
                    đình đám này nhé!
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227860348861596575077.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="
                    Chính vì con người không có cánh, nên họ mới tìm cách để
                    bay - Ukai Keishin"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227860558521893612247.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="Tại sao lại cúi mặt? Bóng chuyền là môn thể thao mà các em
                    phải luôn ngẩng cao đầu! - Ukai Keishin"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-1622786070621680710818.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="Đáng sợ hơn bộ dạng thất bại, chính là bộ dạng sợ hãi trước
                    đối thủ của mình. - Tanaka Ryuunosuke"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-1622786087549763070567.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="Động lực? Chẳng phải chúng ta đều chiến đấu vì niềm kiêu
                    hãnh của mình sao? - Yamaguchi Tadashi"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-1622786099000126342998.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="Yếu kém, nghĩa là còn có chỗ để phát triển. - Takeda Ittetsu"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227861397141006521828.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="Không gì phải lo lắng cả. Mọi người cứ việc nhìn về phía
                    trước, ở phía sau đã có em lo! - Nishinoya Yuu"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227861532261440000491.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="Tài năng là thứ sẽ tự nở rộ, còn kỹ năng thì phải mài dũa
                    mới có được. - Oikawa Tooru"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227861718081471436705.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="Chúng ta là huyết mạch, tuần hoàn nhịp nhàng, vận chuyển
                    oxi để cho bộ não hoạt động. - Kuroo Tetsuro"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227861831911272819734.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="Tôi không cao, nhưng tôi có thể nhảy! - Hinata Shouyou"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-1622786200634131931783.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="Có những bông hoa mà ta chỉ thấy được khi đi đường vòng. -
                    Tanaka Saeko"
                  />
                  <p>Ba phương châm của một chủ công:</p>
                  <p>Thứ nhất, luôn là người truyền cảm hứng cho cả đội.</p>
                  <p>Thứ hai, phá vỡ mọi bức tường chắn ở trước mắt.</p>
                  <p>Thứ ba, đập được tất cả những quả bóng được chuyền.</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227862125042047767874.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227862482471515378372.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="
                    Một người không nhìn thấy đối thủ trước mặt, thì không bao
                    giờ đánh bại được đối thủ ở phía sau. - Iwaizumi Hajime"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-1622786264291407653808.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note=" “Ngay cả khi chúng ta không tự tin rằng mình sẽ thắng, ngay
                    cả khi người khác nói rằng chúng ta không có cơ hội, chúng
                    ta không bao giờ được tự nói với mình điều đó.” - Sawamura
                    Daichi"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/4/photo-1-1622786277495877862990.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="
                    Sự khác biệt của nó với mọi người, sẽ trở thành sức mạnh
                    của riêng nó. - Cha của Ushijima Wakatoshi"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/photo-1-16227862937371199335678.jpg"
                    alt="Haikyuu, Chang Khong Lo Ti Hon, Cau Noi Hay Haikyuu, Ukai Keishin, "
                    note="Có tôi ở đây, cậu là bất khả chiến bại. - Hinata Shouyou &
                    Kageyama Tobio"
                  />
                  <p>
                    Câu nói yêu thích trong Haikyuu!! của các bạn là gì vậy? Hãy
                    chia sẻ nhé!
                  </p>
                  <p>Cre: Đông Phong HúcMaybe You Never Watched This Movie</p>
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source}</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
