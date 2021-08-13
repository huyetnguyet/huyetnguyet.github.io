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
"timestamp": '12/08/2021 05:33 PM',
"title": '10 nhân vật MCU được xây dựng "rất khác" so với phiên bản truyện tranh',
"description": 'Không chỉ có một ngoại hình khác, mà những nhân vật này còn có một câu chuyện khác giữa phiên bản truyện tranh và MCU.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287766964011376795581.jpg',
"alt": 'MCU,COMIC SIÊU ANH HÙNG,MARVEL,NHÂN VẬT MARVEL BỊ THAY ĐỔI,ALDRICH KILLIAN,MORDO,',
"category": 'news',
"date": '12/08/2021',
"time": '05:33 PM',
"link": '/10-nhan-vat-mcu-duoc-xay-dung-rat-khac-so-voi-phien-ban-truyen-tranh',
"zcomponent": 'page_20210812173319',
"filepath": './20210812173319-10-nhan-vat-mcu-duoc-xay-dung-rat-khac-so-voi-phien-ban-truyen-tranh.js'
}



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
  '10 nhân vật MCU được xây dựng "rất khác" so với phiên bản truyện tranh';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "12/08/2021 05:33 PM";
const description =
  "Không chỉ có một ngoại hình khác, mà những nhân vật này còn có một câu chuyện khác giữa phiên bản truyện tranh và MCU.";
const link =
  "10-nhan-vat-mcu-duoc-xay-dung-rat-khac-so-voi-phien-ban-truyen-tranh";
const tagparam = [
  "MCU",
  "COMIC SIÊU ANH HÙNG",
  "MARVEL",
  "NHÂN VẬT MARVEL BỊ THAY ĐỔI",
  "ALDRICH KILLIAN",
  "MORDO",
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

export default function page_20210812173319() {
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
                      Những bộ phim siêu anh hùng được chuyển thể từ truyện
                      tranh của <strong>Marvel</strong> chắc chắn sẽ có nhưng
                      thay đổi về nhân vật để phù hợp với phiên bản màn ảnh
                      rộng.
                    </p>
                    <p>
                      Tuy nhiên, sự thay đổi của nhân vật đôi khi rất khác nhau,
                      không chỉ về ngoại hình mà từ cốt truyện tới tính cách.
                    </p>
                    <p>
                      Dưới đây là 10 nhân vật <strong>MCU</strong> rất khác so
                      với phiên bản truyện tranh của họ:
                    </p>
                    <h5>1. Mantis</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287766964011376795581.jpg"
                      alt="1, MCU,COMIC SIÊU ANH HÙNG,MARVEL,NHÂN VẬT MARVEL BỊ THAY ĐỔI,ALDRICH KILLIAN,MORDO,"
                      note=""
                    />
                    <p>
                      Người tạo ra nhân vật Mantis trong truyện tranh - Steve
                      Englehar, thậm chí còn rất thất vọng với phiên bản{" "}
                      <strong>MCU</strong> của Mantis. Trong truyện tranh, cô là
                      một nhân vật cứng rắn nhưng trong phim ảnh, Mantis trở
                      thành một nhân vật sống nội tâm hơn và mang tới cảm giác
                      hoàn toàn khác.
                    </p>
                    <h5>2. Aldrich Killian</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287766989262085578084.jpg"
                      alt="2, MCU,COMIC SIÊU ANH HÙNG,MARVEL,NHÂN VẬT MARVEL BỊ THAY ĐỔI,ALDRICH KILLIAN,MORDO,"
                      note=""
                    />
                    <p>
                      Câu chuyện ban đầu của nhân vật ở phiên bản truyện tranh
                      và <strong>MCU</strong> khá giống nhau, cụ thể{" "}
                      <strong>Aldrich Killian</strong> là một nhà khoa học bị
                      trầm cảm (mặc dù nguyên nhân là khác nhau). Tuy nhiên,
                      trong phiên bản truyện tranh, Killian là phản diện chính,
                      trong khi khi ở bản phim anh ta chỉ là một nhân vật phụ.
                    </p>
                    <h5>3. Mordo</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-2-16287766994121147616689.jpg"
                      alt="3, MCU,COMIC SIÊU ANH HÙNG,MARVEL,NHÂN VẬT MARVEL BỊ THAY ĐỔI,ALDRICH KILLIAN,MORDO,"
                      note=""
                    />
                    <p>
                      Trong truyện tranh, <strong>Mordo</strong> là kẻ thù của
                      Doctor Strange, kẻ sẽ làm mọi cách để trở nên mạnh mẽ, bao
                      gồm cả việc liên minh với Dormammu. Trong{" "}
                      <strong>MCU</strong>, Mordo trở thành ác nhân vì bị phản
                      bội bởi Ancient One - người đã phá vỡ quy tắc của chính
                      mình.
                    </p>
                    <h5>4. Wong</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-3-1628776699933711197067.jpg"
                      alt="4, MCU,COMIC SIÊU ANH HÙNG,MARVEL,NHÂN VẬT MARVEL BỊ THAY ĐỔI,ALDRICH KILLIAN,MORDO,"
                      note=""
                    />
                    <p>
                      Trong truyện tranh, Wong là người hầu mạnh mẽ chuyên pha
                      trà cho Doctor Strange. Điều này đã trở thành một vấn đề
                      liên quan đến phân biệt chủng tộc, vì điều đó mà trong{" "}
                      <strong>MCU</strong>, nó đã được thay đổi. Wong trong MCU
                      yếu hơn, nhưng anh ta không phải là người hầu của Doctor
                      Strange mà giống như một đối tác hơn.
                    </p>
                    <h5>5. Helmut Zemo</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-4-16287766989451663576713.jpg"
                      alt="5, MCU,COMIC SIÊU ANH HÙNG,MARVEL,NHÂN VẬT MARVEL BỊ THAY ĐỔI,ALDRICH KILLIAN,MORDO,"
                      note=""
                    />
                    <p>
                      Trong truyện tranh, Zemo trở thành ác nhân vì mối hận thù
                      với Captain America và ảnh hưởng của cha anh ta. Công nghệ
                      mà anh ta có trong truyện tranh cũng liên quan đến cha
                      mình, nhưng trong <strong>MCU</strong>, anh ta có mối hận
                      thù với toàn bộ siêu anh hùng, không chỉ mỗi Captain
                      America.
                    </p>
                    <h5>6. Yondu</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-5-16287767015051174910404.jpg"
                      alt="6, MCU,COMIC SIÊU ANH HÙNG,MARVEL,NHÂN VẬT MARVEL BỊ THAY ĐỔI,ALDRICH KILLIAN,MORDO,"
                      note=""
                    />
                    <p>
                      Về đặc điểm, Yondu ở phiên bản truyện tranh và{" "}
                      <strong>MCU</strong> rất khác nhau. Trong truyện tranh,
                      Yondu là một chiến binh tuyệt vời, một thợ săn/ kẻ theo
                      dấu có trình độ cao với tính cách "điềm tĩnh" và cũng là
                      một người tốt.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Còn trong <strong>MCU</strong>, Yondu chỉ là một nhân vật
                      phản diện phụ trong Guardian of the Galaxy, là người rất
                      ghét và thường truy đuổi anh chàng Starlord. Nhưng sang
                      đến phần phim thứ 2 thì Yondu đã được tiết lộ là người rất
                      quan tâm tới Starlord, coi anh chàng như con của mình và
                      gia nhập nhóm Guardians trong thời gian ngắn ngủi để rồi
                      hy sinh ngay trong cảnh phim sau đó. Thực tế thì trong
                      phiên bản comic, Yondu là người đã sáng lập nên nhóm
                      Guardians of the Galaxy.
                    </p>
                    <h5>7. Bucky Barnes</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-6-1628776700957324068401.jpg"
                      alt="7, MCU,COMIC SIÊU ANH HÙNG,MARVEL,NHÂN VẬT MARVEL BỊ THAY ĐỔI,ALDRICH KILLIAN,MORDO,"
                      note=""
                    />
                    <p>
                      Trong <strong>MCU</strong>, Bucky Barnes là một người bạn
                      cũ của Steve, luôn giúp đỡ anh ấy những lúc bị bắt nạt.
                      Trong truyện tranh, Bucky Barnes nhỏ tuổi hơn Steve và là
                      một người lính trẻ, người bạn nhỏ của Captain America.
                    </p>
                    <h5>8. Hope/The Wasp</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-7-16287766989681440226596.jpg"
                      alt="8, MCU,COMIC SIÊU ANH HÙNG,MARVEL,NHÂN VẬT MARVEL BỊ THAY ĐỔI,ALDRICH KILLIAN,MORDO,"
                      note=""
                    />
                    <p>
                      Hope/The Wasp trong <strong>MCU</strong> là một nữ siêu
                      anh hùng mang tên The Wasp. Nhưng trong truyện tranh, Hope
                      Pym thực chất là một nhân vật phản diện mang cái tên Red
                      Queen.
                    </p>
                    <h5>9. Mar-Vell</h5>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-8-16287767004331938575435.png"
                      alt="9, MCU,COMIC SIÊU ANH HÙNG,MARVEL,NHÂN VẬT MARVEL BỊ THAY ĐỔI,ALDRICH KILLIAN,MORDO,"
                      note=""
                    />
                    <p>
                      Mar-Vell trong truyện tranh là một trong những người Kree
                      đầu tiên mang tên Captain <strong>Marvel</strong>. Trong{" "}
                      <strong>MCU</strong>, Mar-Vell thực sự là một nhà khoa học
                      người Kree, người đã phản bội và hỗ trợ người Skrulls bằng
                      cách tạo ra công nghệ từ khối Tesseract trên Trái đất.
                    </p>
                    <h5>10. Ronan</h5>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-9-1628776699468489842433.jpg"
                      alt="10, MCU,COMIC SIÊU ANH HÙNG,MARVEL,NHÂN VẬT MARVEL BỊ THAY ĐỔI,ALDRICH KILLIAN,MORDO,"
                      note=""
                    />
                    <p>
                      Trong phiên bản comic, Ronan giống với đồng phạm của
                      Thanos hơn khi làm đủ mọi thứ bẩn thỉu như thảm sát và
                      thống trị hành tinh, và hắn cũng yêu thích điều này.
                    </p>
                    <p>
                      Còn trong <strong>MCU</strong>, Ronan cũng là một người
                      Kree nhưng khác với truyện tranh ở chỗ Ronan thực sự yêu
                      quý chủng loài của mình và làm mọi thứ chỉ vì người Kree
                      chứ không phải như Thanos hay những kẻ phản diện người
                      khác.
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
