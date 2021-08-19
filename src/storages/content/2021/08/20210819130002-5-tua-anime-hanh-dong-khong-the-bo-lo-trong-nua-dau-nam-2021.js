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
"timestamp": '19/08/2021 01:00 PM',
"title": '5 tựa anime hành động không thể bỏ lỡ trong nửa đầu năm 2021',
"description": 'Nửa đầu 2021 là một mùa anime tuyệt vời và không khiến khán giả thất vọng, đặc biệt là ở thể loại hành động/phiêu lưu.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/vivy-fluorite-eyes-song-01-02-44-1280x720-16291251280092063486149.png',
"alt": 'ANIME,HÀNH ĐỘNG,TOKYO REVENGERS,',
"category": 'games',
"date": '19/08/2021',
"time": '01:00 PM',
"link": '/5-tua-anime-hanh-dong-khong-the-bo-lo-trong-nua-dau-nam-2021',
"zcomponent": 'page_20210819130002',
"filepath": './20210819130002-5-tua-anime-hanh-dong-khong-the-bo-lo-trong-nua-dau-nam-2021.js'
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
const title = "5 tựa anime hành động không thể bỏ lỡ trong nửa đầu năm 2021";
const author = "Jessie Mai";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 01:00 PM";
const description =
  "Nửa đầu 2021 là một mùa anime tuyệt vời và không khiến khán giả thất vọng, đặc biệt là ở thể loại hành động/phiêu lưu.";
const link = "5-tua-anime-hanh-dong-khong-the-bo-lo-trong-nua-dau-nam-2021";
const tagparam = ["ANIME", "HÀNH ĐỘNG", "TOKYO REVENGERS"];
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

export default function page_20210819130002() {
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
                      <strong>Anime</strong> <strong>hành động</strong> luôn
                      được yêu thích hơn cả, vì dễ dàng đáp ứng được sở thích
                      của khán giả nam lẫn nữ giới. Nửa đầu 2021 đã để lại nhiều
                      bộ anime hành động/phiêu lưu vô cùng lôi cuốn, và những
                      cái tên dưới đây là ví dụ tiêu biểu nhất.
                    </p>
                    <h5>1. Vivy: Fluorite Eye’s Song</h5>
                    <p>
                      Trong thế giới của Vivy: Fluorite Eye’s Song, con người đã
                      thua trong trận chiến với hệ thống AI cao cấp. May mắn
                      thay, vẫn còn hy vọng để con người có thể thay đổi tương
                      lai tàn khốc ấy.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/vivy-fluorite-eyes-song-01-02-44-1280x720-16291251280092063486149.png"
                      alt="1, ANIME,HÀNH ĐỘNG,TOKYO REVENGERS,"
                      note=""
                    />
                    <p>
                      Vivy là một người máy với chức năng duy nhất là phát nhạc
                      cho những khách tham quan ở công viên giải trí. Sau một
                      cuộc phẫu thuật, cô trở thành vị cứu tinh duy nhất của
                      nhân loại để thoát khỏi một trận chiến mà loài người không
                      thể thắng được. Những ca khúc chỉ để giải trí của Vivy đã
                      trở t<strong>hành động</strong> lực và vũ khí cho nỗ lực
                      giải cứu thế giới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/vivy-fluoriteeyessong-episode02-figure02-1629125157893692626003.jpg"
                      alt="2, ANIME,HÀNH ĐỘNG,TOKYO REVENGERS,"
                      note=""
                    />
                    <p>
                      Vivy: Fluorite Eye’s Song là một bộ <strong>anime</strong>{" "}
                      ít được biết tới ở Việt Nam, nhưng xứng đáng có được nhiều
                      sự chú ý hơn. Loạt anime <strong>hành động</strong> này sẽ
                      mang lại những cảm xúc, trải nghiệm mà khán giả đã không
                      thấy suốt một thời gian dài.
                    </p>
                    <h5>2. Tokyo Revengers</h5>
                    <p>
                      Trong quá khứ, Takemichi Hanagaki từng là một người khá
                      may mắn. Anh không chỉ có một người bạn gái dễ thương tên
                      Hina, mà còn có chỗ đứng khá vững vàng trong nhóm bạn của
                      mình. Tất cả thay đổi khi Takemichi phải đối đầu với một
                      băng đảng máu mặt, chỉ lúc đó, cậu mới nhận ra hiện tại có
                      thể khốc liệt thế nào.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/60d9d07161d30dfd6b65a21cbanner-tokyo-revengers-16291251985001129424524.jpg"
                      alt="3, ANIME,HÀNH ĐỘNG,TOKYO REVENGERS,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/images-18-1200x675-16291252302831971641354.jpeg"
                      alt="4, ANIME,HÀNH ĐỘNG,TOKYO REVENGERS,"
                      note=""
                    />
                    <p>
                      Ở tuổi trưởng thành, Takemichi sống khép kín và không có
                      nhiều mối quan hệ thân thiết. Sau vụ tai nạn tàu hỏa, anh
                      đã quay trở về quá khứ và nhận ra mình có thể thay đổi
                      tương lai của bản thân, ngăn chặn hàng loạt vụ giết người
                      mà nạn nhân trong đó có cả Hina.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      <strong>Tokyo Revengers</strong> mang đến những trải
                      nghiệm độc đáo và gay cấn, là sự pha trộn tuyệt vời giữa
                      thể loại <strong>hành động</strong>, học đường và du hành
                      thời gian.
                    </p>
                    <h5>3. 86</h5>
                    <p>
                      Trong <strong>anime</strong> 86, cộng hò San Magnolia là
                      một quốc gia đang trong trận chiến khốc liệt với Đế chế
                      Giadian. Nhờ máy móc và công nghệ, không có tổn thương nào
                      về con người trong cuộc chiến – nhưng sự thật có phải vậy?
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/gakuen-86-academy-86-1-16291252687081915833482.jpg"
                      alt="5, ANIME,HÀNH ĐỘNG,TOKYO REVENGERS,"
                      note=""
                    />
                    <p>
                      Cuộc chiến ác liệt này vẫn có sự tham gia của một nhóm
                      được gọi là 86, tất cả đều chỉ là con người bình thường và
                      có thể chết bất cứ lúc nào. Liệu 86 có thể sống sót và
                      phơi bày sự thật về cuộc chiến này hay không?
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/tieu-thuyet-86-eighty-six-se-duoc-chuyen-the-thanh-anime-1629125282896840207983.jpg"
                      alt="6, ANIME,HÀNH ĐỘNG,TOKYO REVENGERS,"
                      note=""
                    />
                    <p>
                      Là một bộ <strong>anime</strong> đề tài chiến tranh, 86
                      vẫn giữ được nét độc đáo của nó qua những tình tiết khá
                      tăm tối, chân thực và tàn bạo. Kết hợp giữa quân sự với
                      cốt truyện xuất sắc và hoạt cảnh anime tuyệt vời, 86 trở
                      thành bộ anime được nhiều người nhắc đến ở nửa đầu 2021,
                      và có lẽ sức nóng này sẽ không giảm xuống một sớm một
                      chiều.
                    </p>
                    <h5>4. SSSS.Dynazenon</h5>
                    <p>
                      Yomogi Asanaka là một học sinh trung học bình thường. Cậu
                      vô tình gặp một người đàn ông vô gia cư dưới gầm cầu và
                      tặng cho ông hộp đồ ăn trưa của mình. Người đàn ông tự
                      xưng mình là Gauma, một người sử dụng kaiju chính hiệu.
                      Khi thành phố bị tấn công bởi một kaiju, Gauma đã sử dụng
                      người máy khổng lồ Dynazenon để chiến đấu, và Yomogi cũng
                      bị cuốn vào trận chiến đó.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/ssssdynazenon-1629125316064287683163.jpg"
                      alt="7, ANIME,HÀNH ĐỘNG,TOKYO REVENGERS,"
                      note=""
                    />
                    <p>
                      Đóng vai trò là phần tiếp theo của SSSS.Gridman,
                      SSSS.Dynazenon giới thiệu loạt nhân vật, robot và kaiju
                      hoàn toàn mới; được nhiều fan đánh giá là một trong những{" "}
                      <strong>anime</strong> <strong>hành động</strong> đáng xem
                      nhất của mùa xuân 2021.
                    </p>
                    <h5>5. Megalo Box 2: Nomad</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/megalobox2b22bnomad-1629125379084798910717.jpg"
                      alt="8, ANIME,HÀNH ĐỘNG,TOKYO REVENGERS,"
                      note=""
                    />
                    <p>
                      Joe a.k.a "Gearless Joe" vươn lên đỉnh cao trong thế giới
                      Megalo Box; từ một kẻ vô danh trở thành nhà vô địch. Không
                      may, ánh hào quang chẳng tồn tại mãi. Vài năm sau vinh
                      quang trên sàn đấu của mình, võ sĩ Joe rơi vào vực thẳm
                      của sự trụy lạc và nghiện ngập. Tại sao anh lại sa sút tới
                      vậy, và tại sao lại sử dụng tên mới là "Nomad", khán giả
                      sẽ tìm được câu trả lời trong Megalo Box 2: Nomad.
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
