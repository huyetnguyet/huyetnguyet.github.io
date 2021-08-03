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
 <ContentItem
 title="Ken Shimizu chỉ ra "đối tác" lợi hại nhất từng gặp, khiến anh chàng phải đầu hàng chỉ sau 3 phút, không dám đóng cùng lần hai"
content="Tới cả Ken Shimizu cũng phải nể phục cô nàng này thì có lẽ chúng ta cũng đủ hiểu độ "bá đạo" rồi đấy." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/5/31/photo-1-16224524093421609918764.png" 
alt="Gai Xinh" 
category="news" 
time="03/06/2021 05:45 PM" 
link="/ken-shimizu-chi-ra-doi-tac-loi-hai-nhat-tung-gap-khien-anh-chang-phai-dau-hang-chi-sau-3-phut-khong-dam-dong-cung-lan-hai"/>

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
  "Ken Shimizu chỉ ra 'đối tác' lợi hại nhất từng gặp, khiến anh chàng phải đầu hàng chỉ sau 3 phút, không dám đóng cùng lần hai";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const date = "03/06/2021";
const time = "05:45 PM";
const description =
  "Tới cả Ken Shimizu cũng phải nể phục cô nàng này thì có lẽ chúng ta cũng đủ hiểu độ 'bá đạo' rồi đấy.";
const link =
  "ken-shimizu-chi-ra-doi-tac-loi-hai-nhat-tung-gap-khien-anh-chang-phai-dau-hang-chi-sau-3-phut-khong-dam-dong-cung-lan-hai";
const tagparam = [
  "gai-xinh",
  "hot-girl",
  "cong-dong-mang",
  "av",
  "phim-av",
  "kodama-rena",
  "ken-shimizu",
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

export default function page_20210603054509() {
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
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
                      Từ trước tới nay, Ken Shimizu luôn được mặc định coi như
                      là "vị thần sức mạnh" trong ngành công nghiệp AV Nhật Bản.
                      Chưa bàn tới thể lực tuyệt vời cũng như việc luôn duy trì
                      lịch tập luyện đầy đủ để giữ form của mình, anh chàng này
                      còn sở hữu trong tay những kỷ lục vô tiền khoáng hậu trong
                      lịch sử. Từ việc đóng tới gần 10.000 tác phẩm cho tới cả
                      tham gia sản xuất 11 bộ phim chỉ trong một ngày, Ken
                      Shimizu đã trở thành huyền thoại trong mắt nhiều người.
                      Thế nhưng, vẫn có đôi lần, "ông vua" của ngành công nghiệp
                      AV cũng phải lên tiếng đầu hàng, và một số cái tên đủ sức
                      "đè bẹp" Ken Shimizu cũng đã được anh chàng bật mí.
                    </p>

                    <p>
                      Theo đó, trong lần nhận lời làm khách mời của một vlog,
                      Ken Shimizu đã khiến rất nhiều người phải bất ngờ với
                      những chia sẻ đầy thú vị của mình. Cụ thể, anh chàng cho
                      rằng mình gần như đã gặp đủ các kiểu đồng nghiệp nữ trong
                      đời, và đồng thời cũng không quá ngán ngẩm khi phải đóng
                      chung với ai. Chỉ có 3 cái tên mà Ken thật sự cảm thấy lo
                      ngại, trong đó người đứng đầu thậm chí còn khiến anh chàng
                      không dám gặp lại lần hai vì quá xấu hổ. Theo đó, ba cái
                      tên lần lượt là Kodama Rena, Hachi Kakekai và Sand and
                      Lemon. Trong số đó, Kodama là người khiến Ken sợ hãi nhất.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/5/31/photo-1-16224524093421609918764.png"
                      alt="Gai Xinh"
                      note="Ken Shimizu - người đàn ông khỏe nhất ngành công nghiệp AV
                    Nhật Bản"
                    />

                    <p>
                      Cụ thể, như lời Ken miêu tả, trong một lần duy nhất hợp
                      tác với Kodama, anh chàng đã chẳng thể hiện được một chút
                      nào gọi là bản lĩnh nam nhi của mình. Ken "đầu hàng" chỉ
                      sau ít phút, và buổi ghi hình, cũng chỉ diễn ra vỏn vẹn 3
                      phút đầy thần tốc trước khi tất cả phải tiến vào giải lao.
                      Đó cũng là ấn tượng khiến cho anh chàng cảm thấy không
                      muốn nhớ nhất. Đồng thời, Ken cũng phải gửi lời khen ngợi
                      tới Kodama Rena, đồng thời cho rằng cô là một trong những
                      diễn viên giỏi nhất anh từng gặp.
                    </p>
                    <RelationNewsInPage />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/5/31/photo-1-1622452573771321637223.jpg"
                      alt="Gai Xinh"
                      note="Kodama Rena - cô nàng đang được nhắc tới trong câu chuyện"
                    />
                    <p>
                      Tuy nhiên, bản thân Ken Shimizu cũng hài hước chia sẻ rằng
                      thật đáng tiếc khi không có cơ hội gặp lại cả 3 cái tên
                      này, khi mà anh chàng chỉ quay duy nhất một bộ phim với
                      Kodama khi cô nàng mới ra mắt mà thôi. Cũng bất ngờ hơn
                      nữa khi mà dù chỉ chia sẻ một câu chuyện đơn giản, thế
                      nhưng chủ đề này lại khiến Ken Shimizu nhận rất nhiều sự
                      chú ý, và sở hữu lượng view lên tới cả nửa triệu lượt xem.
                      Còn về phần Kodama, tên tuổi của cô nàng cũng nhanh chóng
                      lọt vào top tìm kiếm. Cũng dễ hiểu thôi, ai chẳng tò mò
                      muốn biết gương mặt của người đã khiến Ken Shimizu phải
                      "đầu hàng" chỉ sau 3 phút như thế.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/5/31/photo-1-1622452717167833700017.jpg"
                      alt="Gai Xinh"
                      note="Đích thân Ken Shimizu cũng phải lên tiếng khen ngợi Kodama
                    Rena"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/5/31/photo-1-16224529068281121041791.jpg"
                      alt="Gai Xinh"
                      note="Kodama đang trở thành cái tên tìm kiếm rất hot"
                    />
                    <p>
                      Hiện tại, Kodama Rena đang là nữ diễn viên độc quyền của
                      S1, một studio nổi tiếng trong ngành công nghiệp AV Nhật
                      Bản.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/5/31/photo-1-1622452917252278046727.jpg"
                      alt="Gai Xinh"
                      note="
                    Nữ diễn viên vẫn đang hoạt động và là 'gà cưng' độc quyền
                    của S1"
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
