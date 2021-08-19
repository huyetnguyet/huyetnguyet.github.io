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
"timestamp": '19/08/2021 12:56 PM',
"title": 'Jennie và 3 lần tái hiện lại những nhân vật kinh điển: Có đọ lại body bốc lửa của Angelina Jolie khi hóa thân thành Lara Croft huyền thoại?',
"description": 'Bạn nghĩ sao về những tạo hình lấy cảm hứng từ các nhân vật nổi tiếng của Jennie?',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/5473207915133523788010198188912766227040247n-16291142861721328843914.jpg',
"alt": 'jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,',
"category": 'stars',
"date": '19/08/2021',
"time": '12:56 PM',
"link": '/jennie-va-3-lan-tai-hien-lai-nhung-nhan-vat-kinh-dien-co-do-lai-body-boc-lua-cua-angelina-jolie-khi-hoa-than-thanh-lara-croft-huyen-thoai',
"zcomponent": 'page_20210819125646',
"filepath": './20210819125646-jennie-va-3-lan-tai-hien-lai-nhung-nhan-vat-kinh-dien-co-do-lai-body-boc-lua-cua-angelina-jolie-khi-hoa-than-thanh-lara-croft-huyen-thoai.js'
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
  "Jennie và 3 lần tái hiện lại những nhân vật kinh điển: Có đọ lại body bốc lửa của Angelina Jolie khi hóa thân thành Lara Croft huyền thoại?";
const author = "PHOEBE,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "19/08/2021 12:56 PM";
const description =
  "Bạn nghĩ sao về những tạo hình lấy cảm hứng từ các nhân vật nổi tiếng của Jennie?";
const link =
  "jennie-va-3-lan-tai-hien-lai-nhung-nhan-vat-kinh-dien-co-do-lai-body-boc-lua-cua-angelina-jolie-khi-hoa-than-thanh-lara-croft-huyen-thoai";
const tagparam = [
  "jennie",
  "star style",
  "sao Hàn",
  "Lara Croft",
  "Phoebe Dynevor",
  "Angelina Jolie",
  "Uma Thurman",
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

export default function page_20210819125646() {
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
                      Bạn nghĩ sao về những tạo hình lấy cảm hứng từ các nhân
                      vật nổi tiếng của <strong>Jennie</strong>?
                    </p>
                    <p>
                      Với <strong>Jennie</strong>, thời trang không phải là một
                      lần "xem hoa cưỡi ngựa", thời trang là một phần cuộc sống
                      của Jennie. Thông qua việc tìm tòi những phong cách mới
                      lạ, hoặc trở về quá khứ, cô nàng đã tái hiện lại những
                      nhân vật kinh điển để đến gần hơn với khán giả. Dưới đây
                      là 3 tạo hình lấy cảm hứng từ những nhân vật nổi tiếng gây
                      được tiếng vang của nàng rapper nhà Hắc Hường.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/5473207915133523788010198188912766227040247n-16291142861721328843914.jpg"
                      alt="1, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />

                    <p>
                      Trở lại với Kill This Love, <strong>Jennie</strong> chọn
                      tạo hình của nhân vật <strong>Lara Croft</strong> trong bộ
                      phim Tomb Raider (2001) do <strong>Angelina Jolie</strong>{" "}
                      thủ vai, đây cũng là một trong những vai diễn huyền thoại
                      gắn liền với nữ diễn viên. Không diện sắc đen hầm hố như
                      bản gốc, Jennie biến tấu lại với crop top, short trắng
                      khỏe khoắn và găng tay chất lừ, còn lại dây đai, túi hộp
                      vẫn giữ nguyên.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/cq-g86xyau7ay5-16291142864422027124760.jpg"
                      alt="2, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />

                    <p>
                      <strong>Jennie</strong> đã có những phút giây bùng nổ trên
                      sân khấu trong hình ảnh nàng <strong>Lara Croft</strong>{" "}
                      mạnh mẽ. Tuy không có thân hình bốc lửa như minh tinh{" "}
                      <strong>Angelina Jolie</strong>, nàng rapper vẫn ghi điểm
                      với thần thái mạnh mẽ, quyết liệt cùng những cái liếc mắt
                      rất chi là "Jennie". Đuôi tóc tết dài cũng giúp cô nàng
                      thêm phần nổi bật trong mỗi lần di chuyển.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/tumblr2b6a5f2a085ffd6f8f8559f783108db6a9a87069400-1629114048757264103227.gif"
                      alt="3, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/tumblr8db34a45d7d6a9987d2277c4f2e5cba38dbfded2400-16291140489041515589583.gif"
                      alt="4, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/16/tumblrppjl8mhcgr1y4ymvuo3500-16291141012281483776210.gif"
                      alt="15, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />
                    <p>
                      Số tháng 3 của tờ Vogue Hàn Quốc đánh dấu cột mốc quan
                      trọng trong lĩnh vực thời trang của{" "}
                      <strong>Jennie</strong> - debut với vai trò biên tập viên
                      thời trang cộng tác cho tờ báo danh giá này. Xuất hiện bí
                      ẩn trong phông nền đen, Jennie mặc một chiếc váy đen hai
                      dây, khoe khéo bờ vai nõn nà. Cô nàng búi tóc cao, rẽ mái
                      hai bên rồi uốn cúp vào trong, đánh phấn má và môi đậm ấn
                      tượng. Được biết, tiểu thư Daphne trong series đình đám
                      của Netflix - Bridgerton chính là cảm hứng đằng sau hình
                      ảnh này.{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/1507998448232994082551054009851564888733689n-1629114286268117276276.jpg"
                      alt="5, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/ekx6v70vkaasgwo-1629114286448917563402.jpg"
                      alt="6, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />

                    <p>
                      Chẳng còn nghi ngờ gì mỗi khi <strong>Jennie</strong> xuất
                      hiện với những tạo hình tiểu thư trâm anh thế phiệt, đòi
                      hỏi phải thể hiện sự sang chảnh và kiêu kỳ vì cái chất đó
                      đã ăn sẵn trong máu của cô nàng. Biểu cảm gương mặt linh
                      hoạt, lúc đáng yêu như em bé, lúc lạnh lùng, kiêu sa dễ
                      dàng có ngay cái gật đầu của fan hâm mộ.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/ew-u3iouuaaj-ut-16291164953841120570139.jpg"
                      alt="7, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/screenshot2021-02-20at620210220180233-1629116495458851956932.png"
                      alt="8, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />

                    <p>
                      Trên bìa tháng 8 của tạp chí Elle Hàn Quốc mới đây,{" "}
                      <strong>Jennie</strong> thổi một luồng gió mới lạ với mái
                      tóc bob, cắt mái ngang cá tính. Cô diện cardigan dáng rộng
                      bên ngoài sơ mi trắng, nhấn nhá bằng trang sức của Chanel.
                      Chính chủ sau đó đã chia sẻ nguồn cảm hứng lần này đến từ
                      nhân vật Mia Wallace do <strong>Uma Thurman</strong> thủ
                      vai trong bộ phim Pulp Fiction.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/filetinnhaccom-resize-600x-2021-08-04-20210804172046-e08a-16291142865141351408915.jpg"
                      alt="9, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/blackpinks-jennie-channels-uma-thurmans-mia-wallace-from-pulp-fiction-in-latest-shoot-for-elle-koreas-august-2021-issue-3-16291142863651059863755.jpg"
                      alt="10, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/2307022076331717476683866045129625190271006n-1629116722100124166410.jpg"
                      alt="11, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/16/22917691913392696831554647920376835986055880n-16291167220321973217193.jpg"
                      alt="12, jennie,star style,sao Hàn,Lara Croft,Phoebe Dynevor,Angelina Jolie,Uma Thurman,"
                      note=""
                    />

                    <p>
                      Bên cạnh những ý kiến khen ngợi nàng rapper linh hoạt
                      phong cách, không ngần ngại thử nghiệm những điều mới mẻ,
                      phần đông netizen vẫn cho rằng tạo hình lần này không thực
                      sự hợp với <strong>Jennie</strong>. Ở những góc xa, tổng
                      thể trông vẫn khá ổn, thế nhưng những góc chụp cận mặt,
                      khi nữ idol hơi hếch mặt lên thì trông khá cứng nhắc, một
                      phần cũng do mái tóc giả. Dù sao thì tinh thần dám thử dám
                      làm của Jennie cũng nên được khen ngợi nhỉ?
                    </p>
                    <p></p>
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
