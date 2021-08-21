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
"timestamp": '20/08/2021 09:23 AM',
"title": 'Ai còn nhớ huyền thoại Haikyuu!, điểm lại 15 nhân vật được người hâm mộ vô cùng yêu thích nào!',
"description": 'Cùng xem nhân vật bạn yêu thích của Haikyuu! có tên trong danh sách này không nhé!',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-16294438876682085910423.png',
"alt": 'HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,',
"category": 'games',
"date": '20/08/2021',
"time": '09:23 AM',
"link": '/ai-con-nho-huyen-thoai-haikyuu-diem-lai-15-nhan-vat-duoc-nguoi-ham-mo-vo-cung-yeu-thich-nao',
"zcomponent": 'page_20210820092321',
"filepath": './20210820092321-ai-con-nho-huyen-thoai-haikyuu-diem-lai-15-nhan-vat-duoc-nguoi-ham-mo-vo-cung-yeu-thich-nao.js'
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
  "Ai còn nhớ huyền thoại Haikyuu!, điểm lại 15 nhân vật được người hâm mộ vô cùng yêu thích nào!";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "20/08/2021 09:23 AM";
const description =
  "Cùng xem nhân vật bạn yêu thích của Haikyuu! có tên trong danh sách này không nhé!";
const link =
  "ai-con-nho-huyen-thoai-haikyuu-diem-lai-15-nhan-vat-duoc-nguoi-ham-mo-vo-cung-yeu-thich-nao";
const tagparam = [
  "HAIKYUU!",
  "VUA BÓNG CHUYỀN",
  "NHÂN VẬT HAIKYUU!",
  "HINATA SHOYO",
  "KAGEYAMA TOBIO",
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

export default function page_20210820092321() {
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
                      Bộ anime và manga <strong>Haikyuu!</strong> -{" "}
                      <strong>Vua Bóng Chuyền</strong> thực sự rất nổi tiếng,
                      với nội dung về môn bóng chuyền được làm chân thực nhất có
                      thể. Ngoài cốt truyện ra, sức hấp dẫn của bộ truyện này
                      còn nằm ở dàn nhân vật thu hút sự chú ý của người hâm mộ.
                    </p>
                    <p>
                      Cùng điểm lại những nhân vật <strong>Haikyuu!</strong>{" "}
                      được người hâm mộ biết đến nhiều nhất nhé!
                    </p>
                    <h5>1. Kiyoko Shimizu</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-16294438876682085910423.png"
                      alt="1, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      Đây là nhân vật nữ được yêu thích nhất trong series{" "}
                      <strong>Haikyuu!</strong>, Shimizu là quản lý của
                      Karasuno, người có tính cách rất nghiêm túc và điềm đạm,
                      nhưng tất nhiên cô ấy luôn quan tâm đến mọi thành viên
                      trong đội của mình.
                    </p>
                    <h5>2. Hitoka Yachi</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-16294438892251511000850.png"
                      alt="2, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      "Cô em gái tóc vàng" Hitoka Yachi là quản lý mới của
                      Karasuno, cô ấy luôn sẵn sàng giúp đỡ tất cả các thành
                      viên của đội Karasuno.
                    </p>
                    <h5>3. Ushijima Wakatoshi</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-2-1629443889772852649183.jpg"
                      alt="3, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      Ushijima Wakatoshi là một trong những đối thủ khó khăn
                      nhất mà Hinata và Karasuno từng đối mặt. Ushijima
                      Wakatoshi luôn rất nghiêm túc và rmạnh mẽ.
                    </p>
                    <h5>4. Miya Atsumu</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-3-1629443891824202891408.png"
                      alt="4, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      Miya Atsumu là át chủ bài của Inarizaki và là một trong
                      những người chơi giỏi nhất Nhật Bản. anh chàng có tính
                      cách rất vui vẻ và có thể thô lỗ trong những điều kiện
                      nhất định.
                    </p>
                    <h5>5. Miya Osamu</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-4-1629443891281264393642.png"
                      alt="5, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      Miya Osamu là anh trai sinh đôi của Atsumu, nhưng lại có
                      những đặc điểm rất khác biệt. Anh ấy điềm tĩnh hơn và ít
                      hào nhoáng hơn Atsumu, nhưng vẫn là một cầu thủ mạnh mẽ.
                    </p>
                    <h5>6. Keiji Akaashi</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-5-1629443890764996165957.png"
                      alt="6, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      Keiji Akaashi là một cầu thủ thông minh, có óc phân tích
                      cao, thường dượt lại nhiều tình huống và kết quả trước khi
                      quyết định làm gì đó. Cậu là người lịch sự và điềm tĩnh,
                      thường được thấy với khuôn mặt vô cảm hoặc hơi căng thẳng,
                      thường là do tâm trạng thất thường sắp xảy ra của Bokuto.
                      Akaashi rất kiên nhẫn với Bokuto, và là người đi đầu của
                      đội trong việc xử lý tâm trạng thất thường của cậu ta.
                    </p>
                    <h5>7. Kenma Kozume</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-6-16294438892401958744925.png"
                      alt="7, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      Kenma được nhắc đến như là "trái tim" và "bộ não" của đội
                      Nekoma bởi các đồng đội của mình. Cậu là một người vô cùng
                      điềm tĩnh và có óc phân tích. Cậu hiếm khi mất bình tĩnh
                      và thường không bao giờ cảm thấy hào hứng hay phấn khích
                      về bất cứ điều gì (trừ video game, Hinata Shōyō). Cậu hiếm
                      khi bộc lộ cảm xúc, nên thường để lại cho người khác ấn
                      tượng là một người lạnh lùng. Thế nhưng, cậu cũng quan tâm
                      tới bạn bè của mình và để ý tới những điều nhỏ nhặt nhất
                      trong thái độ của họ.
                    </p>
                    <h5>8. Bokuto Kotaro</h5>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-7-16294438903092113353269.jpg"
                      alt="8, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      Bokuto Kotaro là cầu thủ nổi bật của Fukurodani và là một
                      trong những người chơi vĩ đại nhất trong bộ truyện. Tuy
                      nhiên Bokuto có tâm trạng vô cùng thất thường mà các thành
                      viên gọi là "chế độ thoái chí", khi mà ngay cả những điều
                      nhỏ nhặt nhất cũng có thể làm thay đổi tâm trạng của cậu
                      và từ đó sẽ ảnh hưởng tới việc thi đấu.
                    </p>
                    <h5>9. Koushi Sugawara</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-8-1629443889824283777026.png"
                      alt="9, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      Cậu là đội phó và là chuyền hai (Setter) thay thế của đội
                      bóng. Cậu thường được gọi bằng biệt danh "Suga". Sugawara
                      có tính cách nhẹ nhàng đối với các thành viên trong đội và
                      luôn giống như một trụ cột tinh thần của họ,
                    </p>
                    <h5>10. Tsukishima Kei</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-9-1629443889833169918953.png"
                      alt="10, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      Là nhân vật hoàn toàn trái ngược với Hinata (ngay cả ý
                      nghĩa tên của họ cũng là Mặt trăng và Mặt trời) nhưng
                      Tsukishima Kei lại chính là một trong những người chơi
                      chính của Karasuno.
                    </p>
                    <h5>11. Tetsuro Kuroo</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-10-16294438892801357514253.jpg"
                      alt="11, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      Tetsuro Kuroo là đội trưởng và giữ vị trí chắn giữa
                      (Middle Blocker). Cậu là bạn từ nhỏ của Kozume Kenma. Với
                      các đồng đội của mình, Kuroo là một người đội trưởng mạnh
                      mẽ và đáng tin cậy, thường có trách nhiệm thúc đẩy tinh
                      thần của các thành viên trong đội mỗi khi họ thấy mất tinh
                      thần bằng những lời châm chọc ranh mãnh.
                    </p>
                    <h5>12. Oikawa Tooru</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-11-16294438913751517824057.jpg"
                      alt="12, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      Setter của đội bóng chuyền trường Aoba Johsai được miêu tả
                      là một nhân vật rất đẹp trai, nên có rất nhiều fan hâm mộ
                      thích anh chàng này. Oikawa Tooru rất "xấu tính" và hay tự
                      mãn với cả các đối thủ lẫn chính các đồng đội của mình.
                      Mặc dù có sự nổi tiếng, có nhiều fangirl xung quanh và khá
                      trẻ con, Oikawa là một cầu thủ xuất sắc toàn diện và vô
                      cùng nghiêm túc với môn bóng chuyền.
                    </p>
                    <h5>13. Nishinoya Yu</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-12-1629443890350430639127.png"
                      alt="13, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      Đây là một trong những nhân vật mạnh trong đội Karasuno,
                      Nishinoya có tính cách vui vẻ và bùng nổ.
                    </p>
                    <h5>14. Kageyama Tobio</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-13-1629443889300246041866.jpg"
                      alt="14, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      <strong>Kageyama Tobio</strong> là nhân vật chính thứ hai
                      cũng như đối thủ của Hinata trong bộ truyện này. Lúc đầu
                      anh chàng này luôn có thái độ độc tài, tính khí nóng nảy,
                      không có khả năng phối hợp với những người khác và chỉ
                      quan tâm tới việc giành chiến thắng mà không thèm lắng
                      nghe ý kiến của đồng đội. Nhưng dần dần Kageyama Tobio đã
                      thay đổi khi gia nhập trường Karasuno. Kageyama có xu
                      hướng che giấu cảm xúc của mình và không có khả năng giao
                      tiếp tốt với người khác.
                    </p>
                    <h5>15. Hinata Shoyo</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-14-1629443890868662631576.jpg"
                      alt="15, HAIKYUU!,VUA BÓNG CHUYỀN,NHÂN VẬT HAIKYUU!,HINATA SHOYO,KAGEYAMA TOBIO,"
                      note=""
                    />
                    <p>
                      <strong>Hinata Shoyo</strong> là một trong những nhân vật
                      nổi tiếng nhất trong bộ truyện <strong>Haikyuu!</strong>{" "}
                      và đây là nhân vật chính. Dù luôn bị đánh giá thấp bởi các
                      cầu thủ khác khi có ngoại hình quá nhỏ bé để chơi bóng,
                      cậu vẫn luôn quyết tâm nỗ lực. Tuy có chiều cao khiêm tốn
                      nhưng Hinata lại nổi tiếng về tốc độ và khả năng bật nhảy
                      cực tốt và luôn không ngừng cải thiện các kỹ năng của bản
                      thân.
                    </p>
                    <p>Tổng hợp</p>
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
