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
"timestamp": '28/08/2021 08:35 AM',
"title": 'Loạt game hấp dẫn đưa người chơi vào vai quái vật tàn sát không gớm tay',
"description": 'Không phải lúc nào vào vai anh hùng hiệp nghĩa cũng thú vị cả, vào vai phản diện thú vị hơn nhiều.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-162965254098123380770.jpg',
"alt": 'GAME,CARRION,FRIDAY THE 13TH,AMONG US,',
"category": 'games',
"date": '28/08/2021',
"time": '08:35 AM',
"link": '/loat-game-hap-dan-dua-nguoi-choi-vao-vai-quai-vat-tan-sat-khong-gom-tay',
"zcomponent": 'page_20210828083559',
"filepath": './20210828083559-loat-game-hap-dan-dua-nguoi-choi-vao-vai-quai-vat-tan-sat-khong-gom-tay.js'
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
  "Loạt game hấp dẫn đưa người chơi vào vai quái vật tàn sát không gớm tay";
const author = "DS";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:35 AM";
const description =
  "Không phải lúc nào vào vai anh hùng hiệp nghĩa cũng thú vị cả, vào vai phản diện thú vị hơn nhiều.";
const link =
  "loat-game-hap-dan-dua-nguoi-choi-vao-vai-quai-vat-tan-sat-khong-gom-tay";
const tagparam = ["GAME", "CARRION", "FRIDAY THE 13TH", "AMONG US"];
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

export default function page_20210828083559() {
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
                    <h5>1. Carrion</h5>
                    <p>
                      <strong>Carrion</strong> là dự án mới nhất của Phobia{" "}
                      <strong>Game</strong> Studio, nhà sản xuất của tựa game
                      Butcher. Nếu như tựa game trước khiến người chơi vất vả
                      bởi nó cực khó nhằn thì Carrion lại gây ấn tượng mạnh bởi
                      sự đẫm máu và kinh dị dưới góc độ một con quái vật.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-162965254098123380770.jpg"
                      alt="1, GAME,CARRION,FRIDAY THE 13TH,AMONG US,"
                      note=""
                    />

                    <p>
                      Trong <strong>Carrion</strong>, người chơi sẽ không đóng
                      vai anh hùng giải cứu thế giới khỏi thảm họa, mà sẽ trở
                      thành con quái vật tử địch của loài người. Theo đó,
                      Carrion là một con quái vật màu đỏ, vô định hình và có vô
                      số các xúc tu đang bị giam giữ trong một cơ sở nghiên cứu
                      thuộc quyền sở hữu của công ty có tên là Relith Science.
                      Nó thoát khỏi hầm ngục rồi sau đó đi tới các phòng khác
                      nhau của viện nghiên cứu, sau đó làm thịt toàn bộ các nhân
                      viên tại đây theo cách dã man nhất.
                    </p>
                    <p>
                      Sự sáng tạo của <strong>Carrion</strong> không chỉ ở chỗ
                      nó đưa bạn vào vai một tên phản diện gớm ghiếc, mà còn bắt
                      người chơi phải suy nghĩ và sáng tạo để có thể giải đố và
                      vượt qua các chướng ngại vật trên đường đi.{" "}
                      <strong>Game</strong> không có bản đồ hướng dẫn cụ thể cho
                      người chơi, do đó game thủ cần phải nhớ và học hỏi liên
                      tục để có thể đưa mình thoát ra khỏi cạm bẫy đáng sợ và
                      tiếp tục đi hủy diệt cả thế giới.{" "}
                    </p>
                    <h5>2. Friday the 13th</h5>
                    <p>
                      Đúng như tên gọi của mình,{" "}
                      <strong>Friday the 13th</strong> là tựa{" "}
                      <strong>game</strong> kinh dị dựa theo loạt phim nổi tiếng
                      cùng tên của điện ảnh Mỹ. Nội dung của tác phẩm này kể về
                      một tên giết người hàng loạt điên loạn có tên Jason
                      Voorhess. Với hàng loạt vụ thảm sát tại khu vực hồ Crytal
                      Lake, Jason Voorhess đã trở thành một trong những biểu
                      tượng kinh điển cho thể loại phim kinh dị, bạo lực của
                      điện ảnh Mỹ nói riêng và thế giới nói chung.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-1629652553771257650827.jpg"
                      alt="2, GAME,CARRION,FRIDAY THE 13TH,AMONG US,"
                      note=""
                    />

                    <p>
                      <strong>Friday the 13th</strong>: The{" "}
                      <strong>Game</strong> sẽ cho người chơi vào vai gã sát
                      nhân huyền thoại trên màn ảnh Jason Voorhees với nhiệm vụ
                      đi săn tìm 7 nhân vật nam, nữ đang lẩn trốn trong rừng.
                      Hoặc ngược lại, chúng ta cũng có thể điều khiển 1 trong 7
                      con người bất lực đó và cố gắng chạy trốn khỏi lưỡi dao
                      của kẻ đồ tể. Nếu đã từng chơi hay theo dõi một tựa game
                      mới ra mắt gần đây là Dead by Daylight, bạn cũng có thể
                      phần nào hình dung được gameplay của Friday the 13th: The
                      Game.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      <strong>Friday The 13th</strong> vẫn giành được nhiều lời
                      khen ngợi cũng như tán dương từ cộng đồng{" "}
                      <strong>game</strong> thủ khi đem tới sự phá cách trong
                      lối chơi. Nhờ có yếu tố chơi mạng khá là độc đáo, người
                      chơi có thể vào vai Jason Voorhees đi truy sát 7 nhân vật
                      còn lại trước khi hết thời gian.
                    </p>
                    <h5>3. Among Us</h5>
                    <p>
                      <strong>Among Us</strong> đưa người chơi vào các đội gồm
                      4-10 người chơi sửa chữa một trạm vũ trụ bằng cách hoàn
                      thành các nhiệm vụ khác nhau. Trong khi tất cả cố gắng
                      hoàn thành nhiệm vụ thì có những kẻ giết người trà trộn
                      vào đám đông để bí mật hạ sát từng người một. Tựa{" "}
                      <strong>game</strong> ban đầu được phát hành vào năm 2018,
                      nhưng phải đến năm 2020 nó mới trở nên nổi tiếng hơn bao
                      giờ hết.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-1629652476820684758226.jpg"
                      alt="3, GAME,CARRION,FRIDAY THE 13TH,AMONG US,"
                      note=""
                    />

                    <p>
                      Điểm nổi bật của <strong>Among Us</strong> là lối chơi
                      chơi theo dạng "Ma sói" khiến mọi người phải lừa lọc nhau
                      để giành chiến thắng. Mấu chốt của vấn đề là các bạn phải
                      biết hoặc nhận ra ai là người nói thật, ai là người nói
                      dối để đưa ra quyết định đúng đắn nhất.
                    </p>
                    <p>
                      <strong>Among Us</strong> đòi hỏi <strong>game</strong>{" "}
                      thủ phải suy luận và tận dụng tối đa khả năng diễn xuất
                      của bản thân. Còn nếu người chơi không giỏi tranh luận?
                      Không sao, cứ làm một con quái im lặng tàn sát toàn bộ phi
                      hành đoàn trong bóng tối là dược.
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
