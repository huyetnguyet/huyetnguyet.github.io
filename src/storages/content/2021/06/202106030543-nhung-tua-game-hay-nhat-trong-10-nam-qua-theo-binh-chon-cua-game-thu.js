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
 <ContentItem
 title="Những tựa game hay nhất trong 10 năm qua theo bình chọn của game thủ"
content="Hãy cùng các game thủ nhìn lại quãng đường 10 năm qua và điểm tên những tựa game được đánh giá hay nhất trong giai đoạn này." 
src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-16226095087411103493431.jpg" 
alt="Game" 
category="games" 
time="03/06/2021 05:43 PM" 
link="/nhung-tua-game-hay-nhat-trong-10-nam-qua-theo-binh-chon-cua-game-thu"/>

<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "Những tựa game hay nhất trong 10 năm qua theo bình chọn của game thủ";
const author = "DS";
const source = "Trí Thức Trẻ";
const date = "03/06/2021";
const time = "05:43 PM";
const description =
  "Hãy cùng các game thủ nhìn lại quãng đường 10 năm qua và điểm tên những tựa game được đánh giá hay nhất trong giai đoạn này.";
const link =
  "nhung-tua-game-hay-nhat-trong-10-nam-qua-theo-binh-chon-cua-game-thu";
const tagparam = ["binh-chon", "game", "game-thu"];
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

export default function page_20210603054326() {
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
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      Giai đoạn 2010 được xem là giai đoạn nở rộ của ngành công
                      nghiệp sản xuất game khi các tựa game được cải thiện về
                      phần đồ họa, thiết lập chơi lẫn cốt truyện.
                    </p>
                    <h4>2010: Red Dead Redemption</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-16226095087411103493431.jpg"
                      alt="Game"
                      note=""
                    />
                    <p>
                      Red Dead Redemption không phải một tựa game quá đình đám,
                      thế nhưng với những người đã chơi qua thì nó thực sự là
                      một kỷ niệm đáng nhớ. Cốt truyện game chặt chẽ, diễn biến
                      lôi cuốn đã giúp Red Dead Redemption trở thành game cowboy
                      hay nhất với nhiều game thủ.
                    </p>
                    <h4>2011: Arkham City</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/maxresdefault-1622607279599810471198.jpg"
                      alt="Game"
                      note=""
                    />
                    <p>
                      Cho đến tận bây giờ, tựa game Arkham City vẫn được nhiều
                      game thủ đánh giá là tựa game siêu anh hùng tuyệt vời nhất
                      mọi thời đại. Game đã lập ra những chuẩn mực và thay đổi
                      hoàn toàn mới cho các màn combat trong game video. Bên
                      cạnh đó, cốt truyện lẫn đồ họa lấy cảm hứng từ bộ truyện
                      Arkham City cũng góp phần làm tăng thêm trải nghiệm cho
                      người chơi.
                    </p>
                    <h4>2012: Assassin’s Creed 3</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/wp2628288-1622607351086867999629.jpg"
                      alt="Game"
                      note=""
                    />
                    <p>
                      Dù bị đánh giá kém hơn tựa game cùng thời là Mass Effect,
                      thế nhưng Assasin’s Creed 3 ghi dấu trong lòng game thủ
                      với một câu chuyện trọn vẹn và cái kết hợp lý. Game vẫn
                      còn nhiều thiếu sót nhưng thiết lập và các màn combat của
                      Connor Kenway đều mãn nhãn, còn ở mạch truyện thì Haythem
                      là điểm sáng khi được xây dựng khá chi tiết.
                    </p>
                    <h4>2013: Last of Us</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/loucover-16226073857921180526479.jpg"
                      alt="Game"
                      note=""
                    />
                    <p>
                      Nếu bỏ qua phần hậu truyện thì Last of Us hoàn toàn xứng
                      đáng nằm trong danh sách những tựa game xuất sắc của thập
                      niên vừa qua. Nhiều game thủ cực kỳ ấn tượng với cách các
                      nhà làm game xây dựng mối quan hệ giữa Joel và Ellie, đến
                      mức họ tặng cho Last of Us danh hiệu tựa game zombie hay
                      nhất mọi thời đại.
                    </p>
                    <h4>2014: Grand Theft Auto 5</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/grand-theft-auto-5-sale-2560x1440-0d9584079d26-1622607470281652229970.jpg"
                      alt="Game"
                      note=""
                    />
                    <p>
                      Về mặt lý thuyết thì tựa game này ra mắt vào năm 2013,
                      nhưng phiên bản PS4 ra mắt sau đó một năm mới thực sự là
                      kỷ niệm của nhiều game thủ. Không chỉ được lòng người chơi
                      mà doanh thu của game cũng rất ấn tượng với khoảng 6 tỷ đô
                      la ở thời điểm ra mắt và vẫn được chơi sau 7 năm. Game đã
                      lọt top các trò chơi ăn khách nhất mọi thời đại với 140
                      triệu bản bán ra trên khắp thế giới.
                    </p>
                    <h4>2015: The Witcher 3</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/the-witcher-3-wild-hunt-juego-del-a-o-xbox-one-y-xbox-series-x-clave-1622607508722737199382.jpg"
                      alt="Game"
                      note=""
                    />
                    <p>
                      The Witcher 3 là tượng đài kinh điển trong dòng game RPG,
                      dù không phải ai cũng thích tựa game này vì cảm giác cẩu
                      thả mà các cảnh combat lẫn nhiệm vụ đem lại. Tuy nhiên,
                      tất cả khuyết điểm đều bị lu mờ trước cốt truyện lẫn dàn
                      nhân vật đỉnh cao.
                    </p>
                    <h4>2016: Uncharted 4</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/exijo1xxaayfodl-16226075452681604582198.jpg"
                      alt="Game"
                      note=""
                    />
                    <p>
                      Tựa game cuối cùng trong series Uncharted và là một nốt
                      ngân đáng nhớ. Game thủ sẽ không bao giờ quên được hành
                      trình dài mà họ đã trải qua với các nhân vật, đặc biệt khi
                      game có một cái kết đẹp cho Nathan Drake. Phần đồ họa của
                      game cũng được đánh giá cao.
                    </p>
                    <h4>2017: Legend of Zelda: Breath of the Wild</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/-1622607583851524066170.jpg"
                      alt="Game"
                      note=""
                    />
                    <p>
                      Năm 2017 là năm của những tựa game chất lượng cao như
                      Horizon Zero Dawn, Injustice 2, Assassin’s Creed Origins…
                      Thế nhưng Legend of Zelda: Breath of the Wild vẫn được xem
                      là tựa game nổi bật nhất khi kết hợp hài hòa giữa thiết
                      lập chơi, đồ họa, nhân vật…
                    </p>
                    <h4>2018: God of War 4</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/lsarvlf2iu2l1fntu9d3mklq-scaled-16226076276111234008074.jpg"
                      alt="Game"
                      note=""
                    />
                    <p>
                      Một trong số các tựa game PS4 hay nhất với cốt truyện đậm
                      tính sử thi vượt qua mọi chuẩn mực của trò chơi điện tử
                      thông thường. Tựa game thực sự trở thành một cuộc phiêu
                      lưu vào thế giới của các vị thần và những người anh hùng.
                    </p>
                    <h4>2019: Star Wars Fallen Order</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/-1622607670898897841758.jpg"
                      alt="Game"
                      note=""
                    />
                    <p>
                      Star Wars là thương hiệu gắn liền với văn hóa đại chúng
                      hiện đại. Thế nên không quá bất ngờ khi Star Wars Fallen
                      Order được nhiều game thủ bình chọn là tựa game nổi bật
                      trong giai đoạn 2010 – 2019. Cốt truyện game không quá
                      xuất sắc, nhưng nhân vật game lại được xây dựng rất ấn
                      tượng. Các trận combat diễn ra mượt mà với đồ họa mãn
                      nhãn. Với một thương hiệu mang ký ức của nhiều thế hệ thì
                      game thủ cho rằng vậy là đủ.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
