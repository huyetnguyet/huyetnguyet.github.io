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
"timestamp": '11/08/2021 10:55 AM',
"title": 'Top 5 cô nàng anime xinh đẹp với khả năng y tế tuyệt vời, đã thế còn có trái tim thiện lương',
"description": 'Hầu hết họ đều sở hữu khả năng y tế và chữa bệnh tuyệt vời.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/9/anh-1-16284980747111263394186.jpg',
"alt": 'ANIME,NHÂN VẬT ANIME,NARUTO,ONE PIECE,FAIRY TAIL,KHẢ NĂNG Y TẾ,',
"category": 'games',
"date": '11/08/2021',
"time": '10:55 AM',
"link": '/top-5-co-nang-anime-xinh-dep-voi-kha-nang-y-te-tuyet-voi-da-the-con-co-trai-tim-thien-luong',
"zcomponent": 'page_20210811105539',
"filepath": './20210811105539-top-5-co-nang-anime-xinh-dep-voi-kha-nang-y-te-tuyet-voi-da-the-con-co-trai-tim-thien-luong.js'
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
  "Top 5 cô nàng anime xinh đẹp với khả năng y tế tuyệt vời, đã thế còn có trái tim thiện lương";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 10:55 AM";
const description =
  "Hầu hết họ đều sở hữu khả năng y tế và chữa bệnh tuyệt vời.";
const link =
  "top-5-co-nang-anime-xinh-dep-voi-kha-nang-y-te-tuyet-voi-da-the-con-co-trai-tim-thien-luong";
const tagparam = [
  "ANIME",
  "NHÂN VẬT ANIME",
  "NARUTO",
  "ONE PIECE",
  "FAIRY TAIL",
  "KHẢ NĂNG Y TẾ",
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

export default function page_20210811105539() {
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
                      Ở trong bất kỳ một trận chiến nào, từ thế giới của các
                      nhẫn giả <strong>Naruto</strong>, hay{" "}
                      <strong>One Piece</strong> và <strong>Fairy Tail</strong>{" "}
                      thì bác sĩ là một yếu tố không thể thiếu ở bất kỳ thế giới
                      nào. Có rất nhiều những bác sĩ giỏi trong thế giới{" "}
                      <strong>anime</strong> nắm giữ những kiến thức y học vô
                      cùng đáng nể, chính họ sẽ đảm nhiệm vai trò cứu chữa, hồi
                      sức cấp cứu cho đồng đội sau các trận đánh khốc liệt, thậm
                      chí có không ít lần đưa người khác từ cõi chết trở về.{" "}
                    </p>
                    <p>
                      Hãy cùng đến với 5 cái tên nổi bật nhất với{" "}
                      <strong>khả năng y tế</strong> tuyệt vời đến từ thế giới{" "}
                      <strong>anime</strong> nhé.
                    </p>
                    <h5>Ryouko Mikado - To Love-Ru</h5>
                    <p>
                      Ryouko Mikado là một người ngoài hành tinh cư trú trên
                      Trái đất, làm việc với tư cách là một bác sĩ trường học ở
                      Sainan High như một nghề nghiệp. Đối với những người bình
                      thường, cô ấy có vẻ giống như một bác sĩ trường học lý
                      tưởng, nhưng thực tế cô ấy là một người ngoài hành tinh và
                      thường che giấu các đặc điểm người ngoài trái đất của cô
                      ấy là đôi tai giống như yêu tinh phía sau mái tóc đỏ của
                      mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/9/anh-1-16284980747111263394186.jpg"
                      alt="1, ANIME,NHÂN VẬT ANIME,NARUTO,ONE PIECE,FAIRY TAIL,KHẢ NĂNG Y TẾ,"
                      note=""
                    />
                    <p>
                      Cô được biết đến là người rất tốt bụng và dịu dàng đối với
                      cả con người và người ngoài hành tinh. Được biết rằng
                      Mikado có được khả năng như một bác sĩ khi tốt nghiệp từ
                      một trường không xác định từ hành tinh khác. Với{" "}
                      <strong>khả năng y tế</strong> có thể giúp mọi người và
                      các sinh vật, cả người ngoài hành tinh và con người tìm
                      đến Mikado để nhận được sự chăm sóc y tế tốt nhất.
                    </p>
                    <h5>Tsunade – Naruto</h5>
                    <p>
                      Trong thế giới của <strong>anime</strong>{" "}
                      <strong>Naruto</strong>, một ninja chuyên về lĩnh vực y tế
                      và sử dụng các kỹ năng của họ để chữa trị cho những người
                      bị thương hoặc bị bệnh gọi là ninja y tế. Nhân vật Tsunade
                      được biết đến như một người vĩ đại nhất với chuyên môn
                      xuất sắc.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/2-16285008155131551065299.jpg"
                      alt="2, ANIME,NHÂN VẬT ANIME,NARUTO,ONE PIECE,FAIRY TAIL,KHẢ NĂNG Y TẾ,"
                      note=""
                    />
                    <p>
                      Là cháu gái đầu tiên của Hashirama Senju, cô thành thạo
                      điều khiển chakra và các Jutsus cao cấp. Với khả năng của
                      mình, Tsunade đã giúp đỡ làng Konoha nhiều lần hay trong
                      các trận chiến cô cũng có mặt chữa trị kịp thời.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Wendy Marvell - Fairy Tail</h5>
                    <p>
                      Là một cô bé 12 tuổi sử dụng Thiên Không Diệt Rồng Ma pháp
                      - một dạng ma thuật trị thương được dạy bởi người mẹ nuôi
                      của cô - thiên long Grandeene. Bằng cách lấy sức mạnh từ
                      không khí sạch, Wendy có thể chữa lành hầu hết các vết
                      thương và bệnh tật. Tuy nhiên, sức mạnh của Wendy Marvell
                      ít hiệu quả hơn ở những khu vực ô nhiễm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/anh-3-16284977698132136417701.png"
                      alt="3, ANIME,NHÂN VẬT ANIME,NARUTO,ONE PIECE,FAIRY TAIL,KHẢ NĂNG Y TẾ,"
                      note=""
                    />
                    <p>
                      Dần dần, Wendy sử dụng ma thuật của mình vào trong trận
                      chiến, bao gồm khả năng thổi tạo cuồng phong, tăng tốc độ,
                      sức mạnh và phòng thủ cho những người bạn đồng minh của
                      cô, đặc biệt Wendy đã chứng minh được mình có thể kích
                      hoạt Long Lực theo ý muốn.
                    </p>
                    <h5>Akiko Yosano - Bungo Stray Dogs</h5>
                    <p>
                      Hầu hết các thành viên của Cơ quan Thám tử Vũ trang đều sở
                      hữu một số khả năng đặc biệt, và nhân vật{" "}
                      <strong>anime</strong> Akiko Yosano trong anime Bungo
                      Stray Dogs là một trong số đó.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/3-1628500642402465173617.png"
                      alt="4, ANIME,NHÂN VẬT ANIME,NARUTO,ONE PIECE,FAIRY TAIL,KHẢ NĂNG Y TẾ,"
                      note=""
                    />
                    <p>
                      Thou Shall Not Die là <strong>khả năng y tế</strong> tuyệt
                      vời cho phép cô chữa lành bất kỳ loại thương tích hay bệnh
                      tật nào. Khi kích hoạt khả năng, một vài con bướm bay ra
                      từ cơ thể cô ấy rồi đáp xuống xung quanh. Nhưng để khả
                      năng ấy được khởi động, các nạn nhân phải bị thương hoặc
                      sắp chết.
                    </p>
                    <h5>Hakaze Kusaribe - Blast of Tempest</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/9/5-16285007749591336396441.jpg"
                      alt="5, ANIME,NHÂN VẬT ANIME,NARUTO,ONE PIECE,FAIRY TAIL,KHẢ NĂNG Y TẾ,"
                      note=""
                    />
                    <p>
                      Hakaze Kusaribe là một trong những nhân vật chính của{" "}
                      <strong>anime</strong> Blast of Tempest. Là pháp sư của
                      Genesis, nguồn ma thuật của cô là từ Genesis of Trees, cô
                      đã thể hiện nhiều khả năng để kích hoạt sức mạnh thực sự
                      của Genesis. Các kỹ năng của cô bao gồm Forcefield
                      Generation, Healing Magic (ma thuật chữa lành), Movement
                      Magic (ma thuật di chuyển), và Flight (bay). Vì năng lượng
                      của cô là từ Genesis of Trees, nên có thể chữa trị bất kỳ
                      loại bệnh nào.
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
