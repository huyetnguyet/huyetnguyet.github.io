import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '28/08/2021 08:43 AM',
"title": 'Top 15 tựa game thế giới mở hay nhất trên PC (P.2)',
"description": 'Các bạn đang muốn kiếm tìm những tựa game PC thế giới mở hay nhất để trải nghiệm cho khuây khỏa? Thì đây là những ứng cử viên không thể hợp lý hơn.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-1-1629864885974713433190.jpg',
"alt": 'GAME HAY,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,GAME THẾ GIỚI MỞ,TOP GAME,',
"category": 'games',
"date": '28/08/2021',
"time": '08:43 AM',
"link": '/top-15-tua-game-the-gioi-mo-hay-nhat-tren-pc-p2',
"zcomponent": 'page_20210828084326',
"filepath": './20210828084326-top-15-tua-game-the-gioi-mo-hay-nhat-tren-pc-p2.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title = "Top 15 tựa game thế giới mở hay nhất trên PC (P.2)";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:43 AM";
const description =
  "Các bạn đang muốn kiếm tìm những tựa game PC thế giới mở hay nhất để trải nghiệm cho khuây khỏa? Thì đây là những ứng cử viên không thể hợp lý hơn.";
const link = "top-15-tua-game-the-gioi-mo-hay-nhat-tren-pc-p2";
const tagparam = [
  "GAME HAY",
  "TIN TỨC GAME",
  "CỘNG ĐỒNG MẠNG",
  "GAME THẾ GIỚI MỞ",
  "TOP GAME",
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

export default function page_20210828084326() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              {">"}
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
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      Lịch sử ngành game đã trải qua hàng chục năm phát triển.
                      Từ đồ họa cho đến lối chơi, cốt truyện... đều được các nhà
                      làm game chăm chút tỉ mỉ, đồng thời mang đến cho người
                      chơi cảm giác tự do trong cách suy nghĩ và khám phá riêng
                      trong hành trình chinh phục thế giới ảo. Cũng chính vì thế
                      mà các tựa <strong>game thế giới mở</strong> mọc lên ngày
                      càng nhiều, tạo thêm sự lựa chọn đa dạng cho game thủ khi
                      họ muốn trải nghiệm thể loại đầy thử thách này.
                    </p>
                    <p>
                      Nếu đang tìm kiếm những tựa game PC thế giới mở hay nhất
                      để trải nghiệm cho khuây khỏa, thì dưới đây là những ứng
                      cử viên không thể hợp lý hơn.
                    </p>
                    <h5>Assassin's Creed Odyssey</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Assassin's Creed Odyssey là một trong số ít những tựa{" "}
                      <strong>game thế giới mở</strong> có khả năng mang đến cho
                      game thủ PC một bối cảnh vô cùng hùng vĩ và chân thực. Bất
                      kỳ ngóc ngách, địa điểm nào trong game cũng đều có thể hớp
                      hồn người chơi với phong cảnh siêu hoành tráng và bắt mắt.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-1-1629864885974713433190.jpg"
                      alt="1, GAME HAY,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,GAME THẾ GIỚI MỞ,TOP GAME,"
                      note=""
                    />

                    <p>
                      Game rơi vào thời điểm lịch sử 431 - 422 trước Công
                      Nguyên, khi mà Sparta đang giao chiến với Athens. Người
                      chơi sẽ được chọn 1 trong 2 nhân vật chính, bao gồm
                      Alexios hoặc Kassandra. Dù bạn ai đi chăng nữa thì nhân
                      vật chính cũng sẽ tham gia vào trận chiến đó nhằm bảo vệ
                      gia đình của mình, tạo ra những trường đoạn đầy kịch tính
                      và ấn tượng.
                    </p>
                    <h5>Death Stranding</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Thường thì trong số những tựa{" "}
                      <strong>game thế giới mở</strong> xuất sắc nhất, đặc biệt
                      là trên nền tảng PC, bạn sẽ bắt gặp một vài cái tên sở hữu
                      đồ họa đậm chất điện ảnh. Khi tạo ra Death Stranding, đạo
                      diễn Hideo Kojima lừng danh đã làm mọi cách để đảm bảo
                      rằng thế giới trong game phải chân thực hết mức có thể.
                      Bên cạnh đó, nhân vật Norman Reedus cũng có mặt trong game
                      với vai diễn Sam Porter Bridge, mang đến những biểu cảm
                      rất thuyết phục và giúp Death Stranding trở nên có hồn
                      hơn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-1-16298648874361334536258.jpg"
                      alt="2, GAME HAY,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,GAME THẾ GIỚI MỞ,TOP GAME,"
                      note=""
                    />
                    <p></p>
                    <p>
                      Bản thân trò này có một thế giới rất rộng mở cho người
                      chơi khám phá, nhưng không vì vậy mà nó làm loãng cốt
                      truyện trong game. Hideo Kojima rất biết cách lôi cuốn
                      người chơi, bất kể bạn có đi đâu, làm nhiệm vụ gì đi chăng
                      nữa. Nhiều người gọi vui rằng đây là game "mô phỏng đi
                      bộ", và cho dù nó có đúng là như vậy thì Death Stranding
                      vẫn hoàn thành xuất sắc nhiệm vụ mô phỏng của mình.
                    </p>
                    <h5>Fallout: New Vegas</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Tuy thế giới trong Fallout: New Vegas không thật sự quá
                      bắt mắt, nhưng Fallout: New Vegas vẫn chứng minh được rằng
                      đồ họa không phải là tất cả đối với một tựa{" "}
                      <strong>game thế giới mở</strong>, nhất là trên nền tảng
                      PC.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-2-1629864887970839847413.jpg"
                      alt="3, GAME HAY,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,GAME THẾ GIỚI MỞ,TOP GAME,"
                      note=""
                    />

                    <p>
                      Fallout: New Vegas lấy bối cảnh trong một tương lai hậu
                      tận thế, ngay sau khi các sự kiện trong Fallout 3 diễn ra.
                      Địa điểm trong game trước đây được gọi là Las Vegas, nhưng
                      đến khi bạn đặt chân đến đó thì nó đã có một cái tên mới:
                      New Vegas.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p></p>
                    <p></p>
                    <p>
                      Dòng game Fallout vốn nổi tiếng nhờ sở hữu yếu tố nhập vai
                      được đầu tư kỹ lưỡng, và Fallout: New Vegas cũng không
                      ngoại lệ. Nhờ được thừa hưởng những gì tinh túy nhất từ
                      những phần trước đó, New Vegas không chỉ mang đến một thế
                      giới đầy choáng ngợp mà nó còn tạo ra những trải nghiệm
                      khó phai trong tâm trí người chơi.
                    </p>
                    <h5>Horizon Zero Dawn</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Để đứa con tinh thần của mình được vẹn toàn nhất, Guerilla
                      Game đã chăm chút từng li từng tí trong Horizon Zero Dawn.
                      Game được nhiều trang báo vinh danh nhờ sở hữu thế giới mở
                      phong phú với nhiều quần xã sinh vật khác nhau. Bên cạnh
                      đó, bản mở rộng DLC The Frozen Wilds còn đưa người chơi
                      đến vùng băng tuyết ở phía Bắc, tạo ra những cung bậc cảm
                      xúc khác biệt so với phần chơi chính.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-3-1629864887488533191516.jpg"
                      alt="4, GAME HAY,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,GAME THẾ GIỚI MỞ,TOP GAME,"
                      note=""
                    />
                    <p></p>
                    <p></p>
                    <p>
                      Đến với Horizon Zero Dawn, người chơi sẽ được trải nghiệm
                      và chiến đấu trong một thế giới hậu tận thế xa xăm, đi
                      theo phong cách "tribalpunk" pha lẫn "cyberpunk". Bạn sẽ
                      bắt gặp những hình ảnh đặc trưng về người da đỏ Bắc Mỹ,
                      với văn hóa bản địa đặc sắc qua cách sống, sinh hoạt, qua
                      hình dáng những lều bạt, làng mạc, cách bài trí màu sắc
                      mộc mạc chân phương đan xen với những kiến trúc cận tương
                      lai, gần gũi và đầy vẻ hoang tàn... Tất cả được bao trùm
                      bởi một màu xanh thẫm của cây cối, dây leo xum xuê, đôi
                      khi là những công trình mục nát. Với một thế giới mở đầy
                      tự do như vậy, Guerilla Game đã chinh phục được rất nhiều
                      game thủ PC lẫn console.
                    </p>
                    <h5>Forza Horizon 4</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Game nhập vai và phiêu lưu thường lấn át thể loại đua xe,
                      nhưng bản thân những trò đua xe vẫn dư sức mang đến cho
                      người chơi khung cảnh đầy choáng ngợp. Trong đó, Forza
                      Horizon 4 là ví dụ điển hình nhất cho điều này.
                    </p>
                    <p></p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-4-16298648884841467473749.jpg"
                      alt="5, GAME HAY,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,GAME THẾ GIỚI MỞ,TOP GAME,"
                      note=""
                    />
                    <p></p>
                    <p>
                      Game lấy bối cảnh tại Edinburgh - thủ đô của Scotland,
                      chính vì thế nên bạn sẽ bắt gặp những cung đường đầy thơ
                      mộng xuyên qua những tán cây, những con đường băng qua
                      thành phố đầy nhộn nhịp, hoặc những khúc cua quanh co bám
                      theo sườn dốc thách thức những tay lái lụa nhất. Đồng
                      thời, Forza Horizon 4 còn sở hữu một dàn xe đua vô cùng đồ
                      sộ, cho phép bạn thoải mái "quẹo lựa" và độ lại sao cho
                      phù hợp với sở thích của mình. Kết hợp với đồ họa cực kỳ
                      mãn nhãn, Forza Horizon 4 là một tuyệt tác đua xe thế giới
                      mở không chỉ trên PC mà còn cả console các bạn ạ.
                    </p>
                    <p>Theo GVN360</p>
                  </div>
                  <AdsHorizontal />
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
