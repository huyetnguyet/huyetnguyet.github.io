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
"timestamp": '15/08/2021 04:05 PM',
"title": 'Những trò chơi khiến bạn "chết nhiều hơn sống" nhưng cuốn thôi rồi',
"description": 'Các tựa game này có độ thử thách khá cao và đòi hỏi người chơi phải nắm được quy tắc thì mới có thể sống sót.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-16289586805401838925611.png',
"alt": 'GAME,',
"category": 'games',
"date": '15/08/2021',
"time": '04:05 PM',
"link": '/nhung-tro-choi-khien-ban-chet-nhieu-hon-song-nhung-cuon-thoi-roi',
"zcomponent": 'page_20210815160510',
"filepath": './20210815160510-nhung-tro-choi-khien-ban-chet-nhieu-hon-song-nhung-cuon-thoi-roi.js'
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
  'Những trò chơi khiến bạn "chết nhiều hơn sống" nhưng cuốn thôi rồi';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "15/08/2021 04:05 PM";
const description =
  "Các tựa game này có độ thử thách khá cao và đòi hỏi người chơi phải nắm được quy tắc thì mới có thể sống sót.";
const link = "nhung-tro-choi-khien-ban-chet-nhieu-hon-song-nhung-cuon-thoi-roi";
const tagparam = ["GAME"];
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

export default function page_20210815160510() {
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
                    <h5>1. Don’t Starve</h5>
                    <p>
                      Giống như mọi tựa <strong>game</strong> sinh tồn khác -
                      mục đích của Don't Starve rất đơn giản và trực quan - tồn
                      tại và không để bản thân phải chết đói. Người chơi phải
                      tìm cách sống sót trong một thế giới kỳ lạ, đầy những sinh
                      vật quái dị và nhiều mối nguy hiểm khác. Mục tiêu đơn giản
                      không chỉ là thu thập thức ăn, sống sót qua ngày mà bạn
                      còn phải đi tìm những bí ẩn kỳ lạ trên khắp bản đồ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-16289586805401838925611.png"
                      alt="1, GAME,"
                      note=""
                    />
                    <p>
                      Nói thì chơi chơi là thế, nhưng vượt qua được những thử
                      thách của tựa <strong>game</strong> phải nói là cực kỳ
                      khó. Mệt hơn cả, người chơi rất dễ... chết, và mỗi lần
                      chết thì sẽ phải làm lại từ đầu. Vẫn biết rằng mỗi lần
                      chết là một lần rút ra kinh nghiệm mới, thế nhưng cày cuốc
                      kiểu này đúng là hơi cực. Dù sao thì, Don’t Starve vẫn là
                      một trong những tựa game cực kỳ đáng chơi của thể loại
                      roguelike.
                    </p>
                    <h5>2. Valkyria Chronicles</h5>
                    <p>
                      Valkyria Chronicles lôi cuốn người chơi ngay từ cái nhìn
                      đầu tiên nhờ nền tảng đồ họa màu nước hút mắt Canvas
                      Engine. Cốt truyện của nó cũng rất hấp dẫn, cùng với đó là
                      các nhân vật cũng rất đáng nhớ. Tuy nhiên, để thành thạo
                      và "vượt ải" trong Valkyria Chronicles thì lại không dễ
                      chút nào.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-1628958664771173786375.jpg"
                      alt="2, GAME,"
                      note=""
                    />
                    <p>
                      Không như nhiều tựa <strong>game</strong> JRPG khác,
                      Valkyria Chronicles là sự kết hợp của thể loại game chiến
                      thuật, JRPG và bắn súng. Thậm chí, sẽ không quá nếu so
                      sánh một màn chơi Valkyria với việc đánh cờ, bởi người
                      chơi sẽ phải đưa ra những lựa chọn chính xác để có thể
                      chiếm được cứ điểm và giành được lợi thế. Chỉ cần đánh sai
                      chút thôi là bạn hoàn toàn có thể mất luôn nhân vật yêu
                      thích của bạn, thế nên cứ cẩn thận suy nghĩ trước đi đưa
                      nước đi tiếp theo.
                    </p>
                    <h5>3. Rogue Legacy</h5>
                    <RelationNewsInPage category={category} />
                    <p>
                      Rogue Legacy là một trong những tựa <strong>game</strong>{" "}
                      hay nhất thuộc thể loại roguelike. Người chơi sẽ vào vai
                      một anh chàng hiệp sĩ thám hiểm một lâu đài và đánh bại
                      từng con quái vật. Bởi vì tựa game này không có tái sinh
                      mà là một phát chết luôn, nên game thủ cũng phải học hỏi
                      rất nhiều để có thể vượt qua từng màn chơi.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-1628958548854511964060.jpg"
                      alt="3, GAME,"
                      note=""
                    />
                    <p>
                      Điểm thú vị của Rogue Legacy là mỗi lần hiệp sĩ lại có một
                      tính cách và khả năng khác nhau, thế nên người chơi sẽ có
                      lợi thế hay bất lợi một cách đầy ngẫu nhiên. Thêm đó, việc{" "}
                      <strong>game</strong> sở hữu nhiều cơ chế phức tạp cùng
                      những con bot khá "khoai" nên rất nhiều người từng phải
                      than trời vì Rogue Legacy chơi thì cuốn đấy nhưng khó quá.{" "}
                    </p>
                    <h5>4. Darkest Dungeon</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-16289585339701864805693.jpg"
                      alt="4, GAME,"
                      note=""
                    />
                    <p>
                      Khám phá căn hầm bí mật trong một biệt thự bỏ hoang với
                      bối cảnh đen tối, ghê rợn. Bạn sẽ điều khiển nhiều nhân
                      vật khác nhau để cùng nhau vượt qua lũ quái vật và sống
                      sót trong căn ngục. Điểm khiến Darkest Dungeon là những
                      nhân vật đều có chỉ số tâm lý, nếu họ càng căng thẳng thì
                      họ sẽ nảy sinh nhiều ý đồ kỳ lạ, đôi khi là đen tối. Thử
                      thách khả năng quản lý cũng như đem lại một cảm giác rùng
                      rợn, kỳ dị mà bối cảnh của tựa <strong>game</strong> mang
                      lại. Và tất nhiên tính năng Permadeath là một tính năng
                      hoàn hảo cho một tựa game như thế này, và đôi lúc bạn sẽ
                      muốn sử dụng tính năng này lên một số nhân vật của mình
                      đấy.
                    </p>
                    <h5>5. Faster Than Light</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-1628958473881868638105.jpg"
                      alt="5, GAME,"
                      note=""
                    />
                    <p>
                      Ai cũng nghĩ quản lý một hạm đội ngoài không gian là dễ
                      dàng cho đến khi họ chơi FTL. Bạn sẽ phải quản lý những
                      chiếc tàu chiến với nhiều bộ phận phức tạp khác nhau trong
                      và ngoài giao tranh. Hơn nữa, số lượng binh lính là tài
                      nguyên là có hạn nên anh em sẽ phải xoay sở trong nhiều
                      tình huống khó khăn đấy. Và tất nhiên, môi khi bị tấn công
                      và quân đoàn của bạn bị thiệt hại nặng nề thì bạn sẽ phải
                      tìm cách để vực dậy, vì sẽ chẳng có check point hay save
                      nào để bắt đầu lại cả. Tất nhiên với tính năng này, FTL sẽ
                      đem đến một trải nghiệm hardcore hơn và mỗi khi chiến
                      thắng cũng đem lại cảm giác thỏa mãn và thích thú hơn rất
                      nhiều.
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
