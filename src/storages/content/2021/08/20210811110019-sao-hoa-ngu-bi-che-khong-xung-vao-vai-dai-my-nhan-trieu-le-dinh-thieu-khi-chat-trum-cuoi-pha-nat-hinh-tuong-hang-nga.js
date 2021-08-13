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
"timestamp": '11/08/2021 11:00 AM',
"title": 'Sao Hoa ngữ bị chê không đủ đẹp để đóng đại mỹ nhân: Triệu Lệ Dĩnh thiếu khí chất, "trùm cuối" phá nát hình tượng Hằng Nga',
"description": 'Kể cả khi diễn xuất rất tốt thì những nữ diễn viên này vẫn bị chê không lột tả được vẻ đẹp của các đại mỹ nhân nức tiếng.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/3-16286627599161317881769.jpg',
"alt": 'triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '11/08/2021',
"time": '11:00 AM',
"link": '/sao-hoa-ngu-bi-che-khong-xung-vao-vai-dai-my-nhan-trieu-le-dinh-thieu-khi-chat-trum-cuoi-pha-nat-hinh-tuong-hang-nga',
"zcomponent": 'page_20210811110019',
"filepath": './20210811110019-sao-hoa-ngu-bi-che-khong-xung-vao-vai-dai-my-nhan-trieu-le-dinh-thieu-khi-chat-trum-cuoi-pha-nat-hinh-tuong-hang-nga.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  'Sao Hoa ngữ bị chê không đủ đẹp để đóng đại mỹ nhân: Triệu Lệ Dĩnh thiếu khí chất, "trùm cuối" phá nát hình tượng Hằng Nga';
const author = "XỬ NỮ,";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 11:00 AM";
const description =
  "Kể cả khi diễn xuất rất tốt thì những nữ diễn viên này vẫn bị chê không lột tả được vẻ đẹp của các đại mỹ nhân nức tiếng.";
const link =
  "sao-hoa-ngu-bi-che-khong-xung-vao-vai-dai-my-nhan-trieu-le-dinh-thieu-khi-chat-trum-cuoi-pha-nat-hinh-tuong-hang-nga";
const tagparam = [
  "triệu lệ dĩnh",
  "viên san san",
  "an dĩ hiên",
  "vương lệ khôn",
  "dĩnh nhi",
  "ân đào",
  "Mỹ nhân Hoa ngữ",
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

export default function page_20210811110019() {
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
                      Trong Nữ Nhân Của Hoàng Đế, vai diễn Vu Diệu Qua của{" "}
                      <strong>Viên San San</strong> vốn được lấy hình mẫu từ
                      người đẹp Ngu Cơ nức tiếng trong lịch sử. Khuôn mặt của nữ
                      diễn viên bị nhận xét là không phù hợp với phim cổ trang,
                      đặc biệt là vai mỹ nhân nổi tiếng trong lịch sử.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/3-16286627599161317881769.jpg"
                      alt="1, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/1-16286627598471165847560.jpg"
                      alt="2, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/2-1628662759855953708763.jpg"
                      alt="3, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/4-16286627599221382345615.jpg"
                      alt="4, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      <strong>Dĩnh Nhi</strong> cũng bị chê là nhan sắc không đủ
                      tầm để vào vai Tây Thi - "đại mỹ nhân đẹp nhất tại Trung
                      Hoa cổ đại". Trong truyền thuyết, Tây Thi được miêu tả là
                      người đẹp có ngũ quan đoan chính, tướng mạo hơn người ngay
                      cả khi không trang điểm.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/8-1628663157885461684378.jpg"
                      alt="5, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/6-1628663157808745443792.jpg"
                      alt="6, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/7-1628663157816759087002.jpg"
                      alt="7, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/5-16286631496271126158087.jpg"
                      alt="8, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Triệu Kha từng nhận "gạch đá" khi vào vai đại mỹ nhân Tiểu
                      Kiều trong phim Tam Quốc. Khuôn mặt của nữ diễn viên quá
                      già và mạnh mẽ, không phù hợp vào vai mỹ nữ nổi tiếng của
                      thời cổ đại.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/9-16286632882581221315345.jpg"
                      alt="9, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/10-1628663288265708650001.jpg"
                      alt="10, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/11-1628663288273427574273.jpg"
                      alt="11, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/12-16286632882791276670583.jpg"
                      alt="12, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Năm 2009, <strong>Ân Đào</strong> nhận phải không ít chỉ
                      trích khi vào vai Dương Quý Phi trong bộ phim cùng tên.
                      Nhiều người cho rằng cô sở hữu nhan sắc tầm thường, không
                      xứng với vai diễn một đại mỹ nhân Trung Hoa. Nữ diễn viên
                      thậm chí còn bị chế nhạo là "Dương Quý Phi xấu nhất trong
                      lịch sử".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/14-1628663455564649046383.jpg"
                      alt="13, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/16-16286634556321490824635.jpg"
                      alt="14, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/13-16286634555521539624742.jpg"
                      alt="15, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/15-16286634556241833427375.jpg"
                      alt="16, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Trong truyền thuyết, Đát Kỷ là cô gái xinh đẹp mỹ miều,
                      quyến rũ. Trụ Vương vì mê mẩn sắc đẹp của nàng mà lơ đãng
                      việc triều chính. Khi đảm nhận vai diễn này trong Phong
                      Thần Diễn Nghĩa, <strong>Vương Lệ Khôn</strong> đã hứng
                      chịu chỉ trích khi không thể làm toát lên vẻ quyến rũ. So
                      với Ôn Bích Hà - người từng thể hiện thành công vai diễn
                      này, cô bị đánh giá là thua xa đàn chị cả về khí chất lẫn
                      diễn xuất.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/20-16286636398741100890018.jpg"
                      alt="17, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/18-16286636398091605053454.jpg"
                      alt="18, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/17-16286636398021730465999.jpg"
                      alt="19, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/19-1628663639867439793638.jpg"
                      alt="20, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Theo nguyên tác của Ngô Thừa Ân, Nữ vương của Tây Lương nữ
                      quốc có vẻ đẹp "Mày như lá liễu, da tựa mỡ dê. Hoa đào má
                      đỏ thắm, kim phương tóc xanh rì", khiến cho Chiêu Quân,
                      Tây Thi cũng phải "chào thua". Thế nên khi đảm nhận vai
                      diễn này trong Tây Du Ký 3: Nữ Nhi Quốc,{" "}
                      <strong>Triệu Lệ Dĩnh</strong> bị chê không có khí chất
                      của một Nữ vương như đàn chị Chu Lâm khi xưa.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/24-1628663988301384511503.jpg"
                      alt="21, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/22-16286639882882071592010.gif"
                      alt="22, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/21-1628663988213244114981.jpg"
                      alt="23, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/23-16286639882941872640725.jpg"
                      alt="24, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Lý Sư Sư là danh kỹ vừa có tài vừa có sắc, khiến nhiều
                      đấng mày râu si mê trong Thủy Hử. Thế nên phần đông khán
                      giả khó lòng chấp nhận hình ảnh Lý Sư Sư nhợt nhạt, ăn mặc
                      xuề xòa của <strong>An Dĩ Hiên</strong> trong Thủy Hử
                      2011.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/28-16286645334161000538910.jpg"
                      alt="25, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/25-16286645333111793646378.jpg"
                      alt="26, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/27-16286645334101226748423.jpg"
                      alt="27, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/26-1628664533400237891654.jpg"
                      alt="28, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Trong lịch sử, Vệ Tử Phu được miêu tả là người con gái sở
                      hữu dung mạo sắc nước hương trời, vừa đoan trang, dịu dàng
                      lại vừa quyến rũ. Nhan sắc không đủ mỹ miều cộng thêm biểu
                      cảm lúc nào cũng buồn bã của Vương Lạc Đan đã khiến cô bị
                      khán giả chê xấu khi vào vai Vệ Tử Phu trong bộ phim cùng
                      tên năm 2014.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/31-16286653460812129136976.jpg"
                      alt="29, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/32-1628665346151492965124.jpg"
                      alt="30, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/30-1628665346073735456769.jpg"
                      alt="31, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/29-1628665346062156584655.jpg"
                      alt="32, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Hằng Nga là nhân vật huyền thoại trong truyền thuyết tượng
                      trưng cho vẻ đẹp hoàn mỹ của người trong tiên giới. Tạo
                      hình Hằng Nga của Dương Quang trong bộ phim Tây Du Ký 2012
                      bị nhận xét là quá rườm rà. Bên cạnh đó, người xem còn chê
                      Dương Quang trông quá già và sắc sảo, không hợp với hình
                      tượng dịu dàng của nhân vật.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/33-16286655515201964188597.jpg"
                      alt="33, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/34-16286655515901551065574.jpg"
                      alt="34, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/35-16286655515961439425086.jpg"
                      alt="35, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/36-1628665551603216716803.jpg"
                      alt="36, triệu lệ dĩnh,viên san san,an dĩ hiên,vương lệ khôn,dĩnh nhi,ân đào,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>Nguồn ảnh: Tổng hợp</p>
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
