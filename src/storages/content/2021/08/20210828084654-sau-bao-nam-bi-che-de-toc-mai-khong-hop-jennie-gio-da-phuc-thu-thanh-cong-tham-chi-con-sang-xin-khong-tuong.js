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
"timestamp": '28/08/2021 08:46 AM',
"title": 'Sau bao năm bị chê để tóc mái không hợp, Jennie giờ đã phục thù thành công, thậm chí còn sang xịn không tưởng',
"description": 'Từng bị chê không hợp tóc mái, Jennie giờ đã chứng minh không có kiểu tóc gì cô không "cân" được.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/teaser-jennie-chinh-thuc-cong-bo-tro-lai-voi-toc-mai-van-cuc-ngau-d39dbc26-1630051282037281814165.jpeg',
"alt": 'jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:46 AM',
"link": '/sau-bao-nam-bi-che-de-toc-mai-khong-hop-jennie-gio-da-phuc-thu-thanh-cong-tham-chi-con-sang-xin-khong-tuong',
"zcomponent": 'page_20210828084654',
"filepath": './20210828084654-sau-bao-nam-bi-che-de-toc-mai-khong-hop-jennie-gio-da-phuc-thu-thanh-cong-tham-chi-con-sang-xin-khong-tuong.js'
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
  "Sau bao năm bị chê để tóc mái không hợp, Jennie giờ đã phục thù thành công, thậm chí còn sang xịn không tưởng";
const author = "PHOEBE,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "28/08/2021 08:46 AM";
const description =
  'Từng bị chê không hợp tóc mái, Jennie giờ đã chứng minh không có kiểu tóc gì cô không "cân" được.';
const link =
  "sau-bao-nam-bi-che-de-toc-mai-khong-hop-jennie-gio-da-phuc-thu-thanh-cong-tham-chi-con-sang-xin-khong-tuong";
const tagparam = [
  "jennie",
  "star style",
  "sao Hàn",
  "tóc mái",
  "tóc của sao",
  "kiểu tóc",
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

export default function page_20210828084654() {
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
                      Trong BLACKPINK, có lẽ danh hiệu "tắc kè hoa" phù hợp nhất
                      với <strong>Jennie</strong>, từ trang phục, makeup cho tới{" "}
                      <strong>kiểu tóc</strong> đều được cô nàng thường xuyên
                      thay đổi, không trùng nhau mỗi khi xuất hiện. Tuy vậy
                      không phải lần thử nghiệm nào của Jennie cũng được fan
                      chào đón nhiệt liệt, điển hình như khi cô đeo thử mái giả
                      hồi mới debut, nhiều fan đã "la ó", cho rằng Jennie chẳng
                      hề hợp để mái tí nào.
                    </p>
                    <p>
                      Trong buổi livestream trò chuyện với fan cùng cả nhóm,{" "}
                      <strong>Jennie</strong> đã đeo thử mái giả nhưng dường như
                      phần mái này không ăn nhập với tổng thể gương mặt của cô
                      lắm
                    </p>
                    <p>
                      Nhưng <strong>Jennie</strong> quyết không từ bỏ, vài lần
                      khác, nàng rapper lại xuất hiện cùng phím tóc giả này, và
                      dĩ nhiên cũng không nhận được nhiều khen, một phần cũng vì
                      Jennie đang rẽ ngôi 7:3, tóc một bên phồng lên nên nhìn
                      thiếu tự nhiên
                    </p>
                    <p>
                      Bẵng đi một thời gian dài, fan cứ nghĩ{" "}
                      <strong>Jennie</strong> sẽ chẳng bao giờ để mái ngang lại
                      đâu thì cô nàng lại bất ngờ xuất hiện với{" "}
                      <strong>tóc mái</strong> trong MV Kill This Love. Lần này
                      không còn là kiểu thưa cong cong, Jennie mạnh dạn thử luôn
                      tóc mái bằng dày, nhưng phản ứng của fan khi đó rất tốt,
                      nhiều người còn ví cô như búp bê nhờ gương mặt siêu nhỏ
                    </p>
                    <p>
                      Thừa thắng xông lên, <strong>Jennie</strong> tiếp tục đồng
                      hành với mái ngang trong MV Ice Cream, nhưng lần này ấn
                      tượng hơn nhiều nhờ mái tóc màu hồng và bạch kim highlight
                      sành điệu, dẫu đây chỉ là tóc giả thôi
                    </p>
                    <p>
                      Trở lại với Lovesick Girls, <strong>Jennie</strong> đã
                      xuống tay cắt <strong>tóc mái</strong> thực sự, cô để mái
                      mưa dài chạm mắt, kết hợp với kiểu trang điểm lấy mắt làm
                      điểm nhấn, kẻ eyeliner sắc sảo, nhấn thêm hạt cườm ở khóe
                      mắt, tạo nên hình ảnh cá tính có chút "bitchy" xịn mịn
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Khi không trình diễn, <strong>Jennie</strong> cắt mái ngắn
                      lên, trang điểm nhẹ nhàng, tươi tắn hơn, thế là hiện
                      nguyên hình cô công chúa dễ thương với cặp má bánh bao đặc
                      trưng
                    </p>
                    <p>
                      Trong chuyến đi Mỹ mới đây, <strong>Jennie</strong> cũng
                      làm fan dậy sóng một phen với những hình ảnh chuẩn gái Mỹ
                      da nâu sexy, mái tóc còn được Jennie F5 siêu xịn bằng cách
                      thắt bím dài, còn mái thì được uốn cong lơ thơ
                    </p>
                    <p>
                      Trở thành gương mặt trang bìa tháng 8 cho tờ Elle Hàn
                      Quốc, <strong>Jennie</strong> mang đến 2 hình ảnh: một quý
                      cô quyến rũ, bí ẩn nhưng không kém phần thanh lịch, sang
                      trọng và phiên bản hiện đại của nhân vật Mia Wallace, tuy
                      nhiên mái tóc giả ngắn lại làm gương mặt Jennie hơi cứng,
                      kém thanh thoát
                    </p>
                    <p>
                      Mới đây nhất, những hình ảnh của <strong>Jennie</strong>{" "}
                      trong photobook Summer Diaries của BLACKPINK được fan chia
                      sẻ cũng nhanh chóng được lan truyền, các fan không tiếc
                      lời khen ngợi Jennie vì trông cô quá chanh sả, hút mắt
                      người nhìn
                    </p>
                    <p>
                      Vẫn để mái mưa dài đến mắt nhưng lần này{" "}
                      <strong>Jennie</strong> chọn <strong>kiểu tóc</strong> búi
                      nửa, trang điểm nhẹ nhàng với tông cam nhạt, diện bộ váy
                      dây lấp ló vòng 1 quyến rũ. Nhìn những bức ảnh này chắc sẽ
                      chẳng còn ai nói cô nàng không hợp để mái ngang nữa đâu
                      nhỉ?
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/teaser-jennie-chinh-thuc-cong-bo-tro-lai-voi-toc-mai-van-cuc-ngau-d39dbc26-1630051282037281814165.jpeg"
                      alt="1, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/20170427120042vzizzbro-16300512817271616253764.gif"
                      alt="2, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/photo-1-16008489651701339607592-1600879783352-1600879783807673602348-16300512819941564934690.jpg"
                      alt="3, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/b1ebc959f9121bf37f8950c38508af24-1630051281820241077289.jpg"
                      alt="4, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/jennie-toc-mai-bang-2-1258-1565410857-16300515068441567273858.jpg"
                      alt="5, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/photo-1-16008489812951934512195-1630051507146486075666.png"
                      alt="6, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/22960556542622084704825324004198080184650399n-1630051505879638636084.jpg"
                      alt="7, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/23402457042464394520594346045834743186889370n-16300515060261597725178.jpg"
                      alt="8, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/j3-1604996733877358105086-16300515067141135708433.jpg"
                      alt="9, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/j1-1604996733866921622509-1630051506653409571848.jpg"
                      alt="10, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/slipperydefensivecanvasback-sizerestricted-1630051507156793122620.gif"
                      alt="11, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/ejsf3l6uyaelghz-1630051506587338833379.jpg"
                      alt="12, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/21190272642024023364631468498718242078473570n-1630051505469495245801.jpg"
                      alt="13, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/21358329442024130997954034020586299001658394n-16300515055062038254805.jpg"
                      alt="14, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/2256677324234549576581755841915068475608908n-1630051505724315712255.jpg"
                      alt="15, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/21814458542215041745529625538437297966011998n-1630051505668847331092.jpg"
                      alt="16, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/239684710430382094632128447657756356288887n-16300515062161461971516.jpg"
                      alt="17, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/2386087144303821542987891330712913387631605n-1630051506159747182013.jpg"
                      alt="18, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/23723499243043659262667865173286621440847957n-16300517737781051735043.jpg"
                      alt="19, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/23995354743043659029334556050929435012454539n-16300515062651666942001.jpg"
                      alt="20, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/27/23995354743043659029334556050929435012454539n-16300515062651666942001.jpg"
                      alt="21, jennie,star style,sao Hàn,tóc mái,tóc của sao,kiểu tóc,"
                      note=""
                    />
                    <p>Ảnh: Sưu tầm</p>
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
