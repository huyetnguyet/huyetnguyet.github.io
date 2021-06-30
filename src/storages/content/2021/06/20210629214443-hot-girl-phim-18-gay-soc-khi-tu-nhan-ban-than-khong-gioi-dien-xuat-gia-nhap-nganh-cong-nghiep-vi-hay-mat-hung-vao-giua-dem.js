import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '29/06/2021 09:44 PM',
"title": 'Hot girl phim 18+ gây sốc khi tự nhận bản thân không giỏi diễn xuất, gia nhập ngành công nghiệp vì hay mất "hứng" vào giữa đêm',
"description": 'Cô nàng hot girl này hiện đang là một trong những gương mặt top đầu của ngành công nghiệp AV Nhật Bản.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,SAKURA MOMO,PHIM AV,AV,PHIM 18+,',
"category": 'images',
"date": '29/06/2021',
"time": '09:44 PM',
"link": '/hot-girl-phim-18-gay-soc-khi-tu-nhan-ban-than-khong-gioi-dien-xuat-gia-nhap-nganh-cong-nghiep-vi-hay-mat-hung-vao-giua-dem',
"zcomponent": 'page_20210629214443',
"filepath": './20210629214443-hot-girl-phim-18-gay-soc-khi-tu-nhan-ban-than-khong-gioi-dien-xuat-gia-nhap-nganh-cong-nghiep-vi-hay-mat-hung-vao-giua-dem.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  'Hot girl phim 18+ gây sốc khi tự nhận bản thân không giỏi diễn xuất, gia nhập ngành công nghiệp vì hay mất "hứng" vào giữa đêm';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:44 PM";
const description =
  "Cô nàng hot girl này hiện đang là một trong những gương mặt top đầu của ngành công nghiệp AV Nhật Bản.";
const link =
  "hot-girl-phim-18-gay-soc-khi-tu-nhan-ban-than-khong-gioi-dien-xuat-gia-nhap-nganh-cong-nghiep-vi-hay-mat-hung-vao-giua-dem";
const tagparam = [
  "GÁI XINH",
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "SAKURA MOMO",
  "PHIM AV",
  "AV",
  "PHIM 18+",
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

export default function page_20210629214443() {
  return (
    <>
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Có thể nói ngành công nghiệp <strong>phim 18+</strong> là
                    một trong những nơi "đặc thù" nhất, khi mà các diễn viên đôi
                    khi chẳng cần sở hữu kỹ năng diễn xuất quá giỏi, nhưng vẫn
                    thừa sức vươn mình lên thành những ngôi sao top đầu trong
                    ngành. Cũng dễ hiểu thôi, khi nhắc tới những cái tên như Yua
                    Mikami, Yui Hatano hay Karen Kaede, có mấy ai là khen họ về
                    khả năng diễn xuất, cảm xúc chứ. Thay vào đó chính là những
                    mỹ từ dùng để chỉ nhan sắc, thân hình gợi cảm của các cô
                    nàng <strong>hot girl</strong> này. Biết là vậy, thế nhưng
                    không phải ai cũng có thể thẳng thắn được như Momo Sakura -
                    người thậm chí còn tự thừa nhận luôn rằng mình không giỏi và
                    không biết diễn quá nhiều.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214443--10-891161.jpg")
                        .default
                    }
                    alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,SAKURA MOMO,PHIM AV,AV,PHIM 18+,"
                    note="Momo Sakura - cô nàng hot girl trong câu chuyện"
                  />
                  <p>
                    Dành cho những ai chưa biết thì ở thời điểm hiện tại, Momo
                    Sakura đang là một trong những diễn viên thuộc top đầu của
                    ngành công nghiệp <strong>AV</strong> Nhật Bản. Ngay từ thời
                    điểm ra mắt, cô nàng còn đã được vinh danh với giải thưởng
                    Fanza Adult Awards cho danh hiệu nữ tân binh xuất sắc nhất.
                    Tuy nhiên, mặc dù như vậy nhưng trong một lần hiếm hoi chia
                    sẻ với các fan thông qua trang cá nhân, gà cưng của Idea
                    Pocket Studio lại rất thẳng thắn thừa nhận rằng mình thuộc
                    tuýp diễn viên không giỏi diễn.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214443--11-755643.jpg")
                        .default
                    }
                    alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,SAKURA MOMO,PHIM AV,AV,PHIM 18+,"
                    note="Momo Sakura từng dành được vô số giải thưởng ngay sau khi debut"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214443--12-958672.jpg")
                        .default
                    }
                    alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,SAKURA MOMO,PHIM AV,AV,PHIM 18+,"
                    note="Nhưng đồng thời, cô nàng cũng thừa nhận luôn rằng mình không phải là người giỏi diễn xuất"
                  />
                  <p>
                    Tuy nhiên, điều khiến cho Momo Sakura rất được lòng các fan
                    cũng như nhiều đạo diễn chính là ở sự chuyên nghiệp trong
                    từng tiểu tiết của mình. Thậm chí, có thời điểm cô nàng còn
                    kiệt sức tới mức cùng cực sau khi đã cố gắng để hoàn thành
                    kịch bản khó một cách hoàn hảo nhất. Momo chia sẻ cô không
                    thấy quá phiền vì điều này, đồng thời cho rằng đó là một
                    trong những cách để thử thách bản thân ở mức tối đa. Thêm
                    vào đó, việc cố gắng hết sức cũng là biện pháp giúp Momo
                    khỏa lấp đi điểm yếu trong việc diễn xuất của mình.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214443--13-825479.jpg")
                        .default
                    }
                    alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,SAKURA MOMO,PHIM AV,AV,PHIM 18+,"
                    note="Momo chia sẻ luôn cố gắng hết sức trong từng tác phẩm"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214443--14-219580.jpg")
                        .default
                    }
                    alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,SAKURA MOMO,PHIM AV,AV,PHIM 18+,"
                    note="Tới mức mà có lần cô nàng còn kiệt sức vì làm việc quá mức"
                  />
                  <p>
                    Không sử dụng mạng xã hội quá nhiều để tránh đọc phải những
                    phản ứng trái chiều hay các bình luận tiêu cực, cô nàng Momo
                    sống khá khép kín cũng như rất ít khi tương tác với fan hâm
                    mộ. Tuy nhiên, không vì thế mà thiếu đi những thông tin thú
                    vị liên quan tới nàng <strong>hot girl</strong> này. Theo
                    đó, ngay từ khi mới vào nghề, Momo đã tạo ra luồng tranh
                    luận khi tự nhận lý do mình gia nhập ngành công nghiệp{" "}
                    <strong>AV</strong> Nhật Bản chính là vì thường xuyên "mất
                    hứng" vào buổi đêm cũng như khó tìm được cảm hứng bình
                    thường. Và cô nàng hy vọng, công việc mới mẻ này sẽ mang tới
                    những cảm hứng bất tận cho bản thân.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214443--15-459850.jpg")
                        .default
                    }
                    alt="6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,SAKURA MOMO,PHIM AV,AV,PHIM 18+,"
                    note="Màn chia sẻ lý do vào nghề của Momo cũng từng là chủ đề gây ra khá nhiều tranh cãi"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214443--16-314511.jpg")
                        .default
                    }
                    alt="7, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,SAKURA MOMO,PHIM AV,AV,PHIM 18+,"
                    note="Hiện tại, cô nàng vẫn đang rất thành công với sự nghiệp của mình"
                  />
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
