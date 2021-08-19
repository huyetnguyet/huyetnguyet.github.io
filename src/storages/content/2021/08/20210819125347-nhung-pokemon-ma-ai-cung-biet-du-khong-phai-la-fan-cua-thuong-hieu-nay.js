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
"timestamp": '19/08/2021 12:53 PM',
"title": 'Những Pokémon mà ai cũng biết dù không phải là fan của thương hiệu này',
"description": 'Một số Pokémon nổi tiếng đến nỗi ngay cả những người không xem thương hiệu này cũng biết đến chúng.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290922423471474035069.jpg',
"alt": 'PIKACHU,POKÉMON,LUCARIO,PORYGON,POKÉMON NỔI TIẾNG,',
"category": 'games',
"date": '19/08/2021',
"time": '12:53 PM',
"link": '/nhung-pokemon-ma-ai-cung-biet-du-khong-phai-la-fan-cua-thuong-hieu-nay',
"zcomponent": 'page_20210819125347',
"filepath": './20210819125347-nhung-pokemon-ma-ai-cung-biet-du-khong-phai-la-fan-cua-thuong-hieu-nay.js'
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
const title =
  "Những Pokémon mà ai cũng biết dù không phải là fan của thương hiệu này";
const author = "MT";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:53 PM";
const description =
  "Một số Pokémon nổi tiếng đến nỗi ngay cả những người không xem thương hiệu này cũng biết đến chúng.";
const link =
  "nhung-pokemon-ma-ai-cung-biet-du-khong-phai-la-fan-cua-thuong-hieu-nay";
const tagparam = [
  "PIKACHU",
  "POKÉMON",
  "LUCARIO",
  "PORYGON",
  "POKÉMON NỔI TIẾNG",
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

export default function page_20210819125347() {
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
                      Thương hiệu <strong>Pokémon</strong> đã có một quá trình
                      phát triển dài hơn 20 năm, với hàng trăm Pokémon từ nhiều
                      thế hệ khác nhau. Có thể nói là loạt Pokémon đã khẳng định
                      được sức hút của mình trong nền văn hóa đại chúng, đến mức
                      mà ngay cả những ai không phải là fan của thương hiệu này
                      vẫn có thể nhận ra một vài cái tên nổi bật sau đây.
                    </p>
                    <h5>10. Lucario</h5>
                    <p>
                      Đầu tiên sẽ là <strong>Lucario</strong>, thuộc dàn{" "}
                      <strong>Pokémon</strong> thế hệ thứ tư. Lucario rất được
                      fan yêu thích với thiết kế ngầu lòi và sức mạnh đáng nể,
                      đến mức được phần đông người chơi lựa chọn trong ấn phẩm
                      game Smash Bros. Brawl vào năm 2008.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290922423471474035069.jpg"
                      alt="1, PIKACHU,POKÉMON,LUCARIO,PORYGON,POKÉMON NỔI TIẾNG,"
                      note=""
                    />
                    <p>
                      Tuy chưa quá nổi bật như dàn <strong>Pokémon</strong> thế
                      hệ đầu tiên, nhưng <strong>Lucario</strong> vào năm 2020
                      đã có vinh dự đứng thứ hai trong số danh sách "Pokémon của
                      năm".
                    </p>
                    <h5>9. Porygon</h5>
                    <p>
                      <strong>Porygon</strong> là một <strong>Pokémon</strong>{" "}
                      khá đặc biệt, khi mức độ nhận biết ban đầu từ người xem là
                      từ tập phim gây tranh cãi "Electric Soldier Porygon" trong
                      anime. Đó là trong một phân cảnh, khi{" "}
                      <strong>Pikachu</strong> sử dụng đòn Thunderbolt để đấu
                      với Porygon. Trận chiến đó đã tạo ra hiệu ứng hình ảnh
                      xanh, đỏ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-162909224435594833675.jpg"
                      alt="2, PIKACHU,POKÉMON,LUCARIO,PORYGON,POKÉMON NỔI TIẾNG,"
                      note=""
                    />
                    <p>
                      Những tưởng như đó chỉ là điều bình thường, nhưng lại có
                      ảnh hưởng vô cùng lớn tới hệ thần kinh của rất nhiều đứa
                      trẻ ở Nhật Bản. Điều này đã trở thành sự kiện gây xôn xao
                      dư luận vào thời điểm lúc bấy giờ, được truyền thông gọi
                      là "Cú sốc <strong>Pokémon</strong>" và bị cấm chiếu hoàn
                      toàn. Mặc dù vậy, <strong>Porygon</strong> vẫn khẳng định
                      sự nổi tiếng của mình, khi còn được nhắc thoáng qua trong
                      các tv series ăn khách ở Mỹ như The Simpsons và South
                      Park.
                    </p>
                    <h5>8. Psyduck</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-2-16290922448321590385167.jpg"
                      alt="3, PIKACHU,POKÉMON,LUCARIO,PORYGON,POKÉMON NỔI TIẾNG,"
                      note=""
                    />
                    <p>
                      Không ngoa khi nói khi Psyduck là một trong những{" "}
                      <strong>Pokémon</strong> có mức độ nhận diện cao nhất từ
                      anime, manga cho tới cả phim điện ảnh. Psyduck được yêu
                      thích nhờ vào ngoại hình dễ gần, khả năng thú vị và đặc
                      biệt là tính cách ngây ngô làm nên không ít những khoảnh
                      khắc giải trí hài hước.
                    </p>
                    <h5>7. Meowth</h5>
                    <p>
                      Không thể phủ nhận rằng băng Rocket đã trở thành một phần
                      không thể thiếu của thương hiệu <strong>Pokémon</strong>,
                      nhất là trong loạt anime. Đặc biệt là Meowth, khi chú mèo
                      biết nói đầy lém lỉnh này cũng có độ bao phủ về danh tiếng
                      không hề thua kém gì <strong>Pikachu</strong> cả.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-3-16290922438671248926558.jpg"
                      alt="4, PIKACHU,POKÉMON,LUCARIO,PORYGON,POKÉMON NỔI TIẾNG,"
                      note=""
                    />
                    <p>
                      Có thể không phải là cái tên thuộc hàng mạnh nhất, nhưng
                      Meowth vẫn biết cách chiếm trọn trái tim của rất nhiều
                      người, kể cả khi họ không hẳn là fan của loạt series này.
                    </p>
                    <h5>6. Bộ ba Kanto</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-4-16290922433402074248748.jpg"
                      alt="5, PIKACHU,POKÉMON,LUCARIO,PORYGON,POKÉMON NỔI TIẾNG,"
                      note=""
                    />
                    <p>
                      Dàn <strong>Pokémon</strong> thế hệ thứ đầu tiên có rất
                      nhiều cái tên được biết đến, chẳng hạn như bộ ba nổi bật
                      từ vùng Kanto.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Những Bulbasaur, Charmander, Squirtle luôn suốt hiện ở rất
                      nhiều ấn phẩm về <strong>Pokémon</strong>, khiến cho mức
                      độ nhận diện ngày càng được nhân rộng hơn nữa. Bộ ba này
                      được đánh giá vừa mạnh vừa có thiết kế tạo hình thuộc hàng
                      đẹp nhất trong số toàn bộ Pokémon và vẫn sẽ luôn được yêu
                      thích.
                    </p>

                    <h5>5. Jigglypuff</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-16290929891982144238835.jpg"
                      alt="6, PIKACHU,POKÉMON,LUCARIO,PORYGON,POKÉMON NỔI TIẾNG,"
                      note=""
                    />
                    <p>
                      Jigglypuff là một <strong>Pokémon</strong> có tạo hình
                      đáng yêu với tay cầm micro, khả năng đặc biệt khiến cho
                      người khác ngủ thiếp đi đã trở thành thương hiệu. Cũng như{" "}
                      <strong>Lucario</strong>, Jigglypuff được nhiều người chơi
                      Super Smash Bros lựa chọn và xuất hiện trong các đợt quảng
                      bá thương hiệu Pokémon. Đặc biệt là Jigglypuff còn trở nên
                      được yêu mến hơn với một vài phút ngắn ngủi xuất hiện
                      trong Detective <strong>Pikachu</strong>.
                    </p>
                    <h5>4. Charizard</h5>
                    <p>
                      Cũng không thể nào bỏ qua Charizard, hình dạng nâng cấp
                      cuối cùng của Charmander. Charizard qua nhiều năm vẫn luôn
                      nằm trong hàng ngũ các <strong>Pokémon</strong> đại diện
                      cho thương hiệu này với mức độ yêu thích và nhận diện rất
                      lớn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-16290929909261074319573.jpg"
                      alt="7, PIKACHU,POKÉMON,LUCARIO,PORYGON,POKÉMON NỔI TIẾNG,"
                      note=""
                    />
                    <p>
                      Charizard còn được yêu thích hơn nữa khi sở hữu hai hình
                      thái đặc biệt là Mega Evolutions và Gigantamax từ loạt
                      video game. Rất nhiều người tuy thừa nhận bản thân không
                      phải là fan của loạt <strong>Pokémon</strong>, nhưng lại
                      có thể dễ dàng nhận ra ngay Charizard nhờ vào ấn tượng rất
                      lớn mà Pokémon này để lại.
                    </p>
                    <h5>3. Eevee</h5>
                    <p>
                      Eevee là một <strong>Pokémon</strong> đặc biệt với tạo
                      hình dễ thương lấy cảm hứng từ loài cáo, sở hữu khả năng
                      nâng cấp theo nhiều nguyên tố khác nhau.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-2-16290929919231115094426.jpg"
                      alt="8, PIKACHU,POKÉMON,LUCARIO,PORYGON,POKÉMON NỔI TIẾNG,"
                      note=""
                    />
                    <p>
                      Ngoài <strong>Pikachu</strong> ra, thương hiệu{" "}
                      <strong>Pokémon</strong> trong một vài sự kiện nhất định
                      đôi khi cũng đã sử dụng Eevee như linh vật không chính
                      thức để quảng bá rộng rãi ra tới nhiều nơi ngoài quê hương
                      Nhật Bản.
                    </p>
                    <h5>2. Mewtwo</h5>
                    <p>
                      Mewtwo là một trong những <strong>Pokémon</strong> để lại
                      rất nhiều ấn tượng từ ngoại hình bắt mắt, toát lên sự nguy
                      hiểm vốn có và sở hữu khả năng ấn tượng. Mewtwo xuất hiện
                      từ video games, anime cho đến phim điện ảnh như Detective{" "}
                      <strong>Pikachu</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-3-1629092991409406152115.jpg"
                      alt="9, PIKACHU,POKÉMON,LUCARIO,PORYGON,POKÉMON NỔI TIẾNG,"
                      note=""
                    />
                    <p>
                      Với mức độ nổi tiếng của mình, đã từng có thời điểm mà rất
                      nhiều người đã luôn cho rằng Mewtwo là cái tên đứng đầu
                      trong danh sách những <strong>Pokémon</strong> mạnh nhất
                      lịch sử.
                    </p>
                    <h5>1. Pikachu</h5>
                    <p>
                      Cuối cùng sẽ là <strong>Pikachu</strong>, biểu tượng của
                      thương hiệu Pokémo ở cả Nhật Bản và thế giới. Không ngoa
                      khi nói, Pikachu được đánh giá là đại diện cho cả thương
                      hiệu <strong>Pokémon</strong> suốt 25 năm qua, khi nổi
                      tiếng đến mức từng được tạp chí Times vinh danh "Nhân vật
                      hoạt hình được yêu thích nhất" vào năm 1999. Đó còn là khi
                      Pokémon này xuất hiện trong buổi diễu hành mừng ngày Lễ Tạ
                      ơn hàng năm của xứ sở cờ hoa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-4-16290929839131126720440.jpg"
                      alt="10, PIKACHU,POKÉMON,LUCARIO,PORYGON,POKÉMON NỔI TIẾNG,"
                      note=""
                    />
                    <p>
                      Nhiều người có thể là chưa từng xem qua ấn phẩm nào về{" "}
                      <strong>Pokémon</strong>, nhưng lại dễ dàng nhận ra ngay{" "}
                      <strong>Pikachu</strong>.
                    </p>
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
