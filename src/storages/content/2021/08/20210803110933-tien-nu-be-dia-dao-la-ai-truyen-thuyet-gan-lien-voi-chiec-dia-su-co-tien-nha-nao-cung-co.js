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
"timestamp": '03/08/2021 11:09 AM',
"title": 'Tiên nữ bê đĩa đào là ai? Truyền thuyết gắn liền với chiếc đĩa sứ cô tiên nhà nào cũng có',
"description": 'Những chiếc đĩa sứ với hình cô tiên bê đĩa đào hẳn đã là một phần tuổi thơ của rất nhiều người. Nhưng nhân vật này là ai? Tại sao lại được in hình trên đĩa?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-1627958822484112425535.jpg',
"alt": 'Người Trung Hoa,đời nhà thanh,',
"category": 'news',
"date": '03/08/2021',
"time": '11:09 AM',
"link": '/tien-nu-be-dia-dao-la-ai-truyen-thuyet-gan-lien-voi-chiec-dia-su-co-tien-nha-nao-cung-co',
"zcomponent": 'page_20210803110933',
"filepath": './20210803110933-tien-nu-be-dia-dao-la-ai-truyen-thuyet-gan-lien-voi-chiec-dia-su-co-tien-nha-nao-cung-co.js'
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
  "Tiên nữ bê đĩa đào là ai? Truyền thuyết gắn liền với chiếc đĩa sứ cô tiên nhà nào cũng có";
const author = "GREEN,";
const source = "Trí thức trẻ";
const timestamp = "03/08/2021 11:09 AM";
const description =
  "Những chiếc đĩa sứ với hình cô tiên bê đĩa đào hẳn đã là một phần tuổi thơ của rất nhiều người. Nhưng nhân vật này là ai? Tại sao lại được in hình trên đĩa?";
const link =
  "tien-nu-be-dia-dao-la-ai-truyen-thuyet-gan-lien-voi-chiec-dia-su-co-tien-nha-nao-cung-co";
const tagparam = ["Người Trung Hoa", "đời nhà thanh"];
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

export default function page_20210803110933() {
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
                      Hẳn trong các gia đình đều từng có hoặc đang có ít nhất
                      một chiếc đĩa sứ với hình ảnh cô tiên bê đĩa đào. Không ít
                      người cho rằng đây chỉ là hình ảnh trang trí thông thường
                      trên đĩa. Tuy nhiên, hóa ra sau cô tiên này lại là cả câu
                      chuyện dài.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-16279588206991312703661.jpg"
                      alt="1, Người Trung Hoa,đời nhà thanh,"
                      note="Hình ảnh chiếc đĩa sứ cô tiên huyền thoại"
                    />
                    <p>
                      Cô tiên trên đĩa được gọi là Ma Cô tiên nữ, được{" "}
                      <strong>người Trung Hoa</strong> xem như đại diện cho tuổi
                      thọ. Truyền thuyết kể rằng vị tiên nữ này liên quan đến
                      câu nói quen thuộc "bãi bể nương dâu" hay "thương hải tang
                      điền" thường đi vào thơ văn. Câu chuyện về Ma Cô tiên nữ
                      được ghi chép trong Thần tiên truyện của Cát Hồng.
                    </p>
                    <p>
                      Bức tranh "Ma Cô hiến thọ đồ" thường được in trên gốm sứ
                    </p>
                    <p>
                      Vào thời Đông Hán, có người tên Tế Thái, nhờ dốc lòng tu
                      tập mà đắc đạo thành tiên. Thuở chưa phi thăng, một hôm Tế
                      Thái đón tiếp một tiên nhân có tên Vương Phương Bình. Tiên
                      nhân này đi cùng với một tiên nữ có tên Ma Cô. Ba người
                      cùng gặp gỡ và đàm đạo. Khi đang trò chuyện với Vương
                      Phương Bình, Ma Cô nói: "Từ lần gặp trước đến nay, ta đã
                      ba lần thấy biển Đông hóa thành ruộng dâu".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-2-16279588219331683774447.jpg"
                      alt="2, Người Trung Hoa,đời nhà thanh,"
                      note="Ma Cô tiên nữ là hình ảnh trang trí đĩa được ưa chuộng nhất"
                    />
                    <p>
                      Phải mất cả trăm năm đến hàng vạn năm thì biển cả mới bị
                      bồi lấp hóa thành đất đai canh tác mà trồng được dâu tằm.
                      Lại mất thêm hàng trăm, hàng vạn năm nữa nương dâu mới bị
                      nhấn chìm xuống biển. Vậy mà Ma Cô tiên nữ có dung mạo chỉ
                      18 - 19 tuổi lại có thể thấy được những ba lần biến hóa
                      như thế. Có thể thấy rằng Ma Cô đã sống được rất lâu rồi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Người đời sau này dựa vào tích truyện mà suy tụng Ma Cô
                      trở thành vị thọ tiên. Câu nói "thương hải tang điền"
                      (biển hóa nương dâu) được dùng để chỉ một khoảng thời gian
                      dài, nhiều biến cố và xuất hiện nhiều trong thơ văn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-3-16279588230971280725977.jpg"
                      alt="3, Người Trung Hoa,đời nhà thanh,"
                      note="Chiếc đĩa quen thuộc với những người hay đi ăn hàng"
                    />
                    <p>
                      Theo quan niệm của <strong>người Trung Hoa</strong>, mỗi
                      năm cứ vào ngày 3 tháng 3, Ma Cô tiên nữ sẽ đến dâng lễ
                      mừng thọ Tây Vương Mẫu. Vì thế, từ{" "}
                      <strong>đời nhà Thanh</strong>, người ta đã vẽ hình Ma Cô
                      bê đĩa đào làm hình trang trí gốm sứ. Bức vẽ này được gọi
                      là "Ma Cô hiến thọ đồ". Trong đó, vị tiên nữ sẽ có dáng vẻ
                      duyên dáng, mặc quần áo lộng lẫy xinh đẹp, chân cưỡi mây,
                      dắt chim hạc hoặc cưỡi trên lưng con nai. Nét mặt tiên nữ
                      hoan hỉ, bàn tay búp sen bưng đào tiên hoặc rượu chúc thọ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-4-1627958822507659756082.jpg"
                      alt="4, Người Trung Hoa,đời nhà thanh,"
                      note="Mẫu vẽ khác thường được người Hoa ưa thích"
                    />
                    <p>
                      Trong lịch sử, "Ma Cô hiến thọ đồ" được sử dụng trang trí
                      đầu tiên vào thời Khang Hy nhà Thanh. Sau đó bức vẽ dần
                      phổ biến. Từ đó về sau, Ma Cô hiến thọ đồ cũng được sử
                      dụng rộng rãi trên các đồ sứ, nhiều nhất là trên ấm, chén
                      đĩa. Đi cùng với hình vẽ thường có thêm dòng chữ 麻姑献寿
                      - Ma Cô hiến thọ.
                    </p>
                    <p>
                      Vậy là chiếc đĩa cô tiên gắn liền với tuổi thơ dữ dội của
                      nhiều người ẩn chứa cả một câu chuyện về Ma Cô tiên nữ. Bí
                      mật khó hiểu nhất về chiếc đĩa dùng đựng đồ ăn trong nhà
                      cuối cùng cũng đã được giải đáp.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-1-1627958822484112425535.jpg"
                      alt="5, Người Trung Hoa,đời nhà thanh,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/3/photo-4-1627958822507659756082.jpg"
                      alt="6, Người Trung Hoa,đời nhà thanh,"
                      note=""
                    />
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
