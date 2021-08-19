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
"timestamp": '19/08/2021 01:01 PM',
"title": '7 phản diện của vũ trụ điện ảnh Marvel hóa ra lại là "anh hùng" trong các bộ phim khác',
"description": 'Những diễn viên này có thể là phản diện trong MCU, nhưng ở phim khác họ lại là anh hùng.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-1-1629206055332634247423.jpg',
"alt": 'PHẢN DIỆN MCU,VŨ TRỤ ĐIỆN ẢNH MARVEL,ÁC NHÂN MARVEL,SIÊU ANH HÙNG,PHIM HAY,DIỄN VIÊN,ANH HÙNG TRONG PHIM,',
"category": 'news',
"date": '19/08/2021',
"time": '01:01 PM',
"link": '/7-phan-dien-cua-vu-tru-dien-anh-marvel-hoa-ra-lai-la-anh-hung-trong-cac-bo-phim-khac',
"zcomponent": 'page_20210819130127',
"filepath": './20210819130127-7-phan-dien-cua-vu-tru-dien-anh-marvel-hoa-ra-lai-la-anh-hung-trong-cac-bo-phim-khac.js'
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
  '7 phản diện của vũ trụ điện ảnh Marvel hóa ra lại là "anh hùng" trong các bộ phim khác';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "19/08/2021 01:01 PM";
const description =
  "Những diễn viên này có thể là phản diện trong MCU, nhưng ở phim khác họ lại là anh hùng.";
const link =
  "7-phan-dien-cua-vu-tru-dien-anh-marvel-hoa-ra-lai-la-anh-hung-trong-cac-bo-phim-khac";
const tagparam = [
  "PHẢN DIỆN MCU",
  "VŨ TRỤ ĐIỆN ẢNH MARVEL",
  "ÁC NHÂN MARVEL",
  "SIÊU ANH HÙNG",
  "PHIM HAY",
  "DIỄN VIÊN",
  "ANH HÙNG TRONG PHIM",
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

export default function page_20210819130127() {
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
                      Các nhân vật phản diện trong vũ trụ điện ảnh MCU được đảm
                      nhận bởi những <strong>diễn viên</strong> nổi tiếng, và họ
                      cũng tham gia diễn xuất ở một số bộ phim khác nữa. Thế
                      nên, có thể họ là ác nhân trong các bộ phim MCU, nhưng
                      không phải lúc nào họ cũng là ác nhân trong các bộ phim
                      khác, vì vai trò của họ khác nhau.
                    </p>
                    <p>
                      Dưới đây là 7 gã phản diện trong MCU là anh hùng ở các bộ
                      phim khác, cùng điểm qua nhé!
                    </p>
                    <h5>1. Hugo Weaving</h5>
                    <p>
                      Hugo Weaving là nam <strong>diễn viên</strong> chỉ đóng
                      vai Red Skull trong bộ phim Captain America: The First
                      Avengers (trong phim Infinity War và Endgame là do nam
                      diễn viên Ross Marquand thể hiện).
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-1-1629206055332634247423.jpg"
                      alt="1, PHẢN DIỆN MCU,VŨ TRỤ ĐIỆN ẢNH MARVEL,ÁC NHÂN MARVEL,SIÊU ANH HÙNG,PHIM HAY,DIỄN VIÊN,ANH HÙNG TRONG PHIM,"
                      note=""
                    />
                    <p>
                      Thế nhưng trong bộ phim Chúa tể của những chiếc nhẫn, Hugo
                      Weaving lại là thủ lĩnh của tộc Elf, cụ thể là nhân vật
                      Elrond. Vị llãnh chúa của Rivendell là 1 trong những người
                      trị vì vĩ đại nhất xuất hiện từ thời đại đầu tiên cho đến
                      tận thời đại thứ 3 của thế giới. Elrond được miêu tả qua
                      trong The Hobbit như sau :
                    </p>
                    <p>
                      "Ông có sự quí phái và đẹp đẽ của một tiên chúa,mạnh mẽ
                      như một chiến binh,khôn ngoan như 1 phù thủy,đáng kính như
                      một vị vua của những người lùn và có tấm lòng nhân hậu,ấm
                      áp như mùa hạ".
                    </p>
                    <h5>2. Michael Keaton</h5>
                    <p>
                      Trong Spider-Man: Homecoming (và có thể là cả ở những dự
                      án tiếp theo của series Spider-Man), Michael Keaton đóng
                      vai phản diện chính, Vulture.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-1-1629206058068997278072.jpg"
                      alt="2, PHẢN DIỆN MCU,VŨ TRỤ ĐIỆN ẢNH MARVEL,ÁC NHÂN MARVEL,SIÊU ANH HÙNG,PHIM HAY,DIỄN VIÊN,ANH HÙNG TRONG PHIM,"
                      note=""
                    />
                    <p>
                      Nhưng từ lâu, Michael Keaton đã là một trong những{" "}
                      <strong>diễn viên</strong> thủ vai Người Dơi. Cụ thể,
                      Michael Keaton vào vai người hùng trong hai bộ phim Batman
                      (năm 1989) và Batman Return (năm 1992) của đạo diễn Tim
                      Burton.
                    </p>
                    <h5>3. Michael B. Jordan</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-2-16292060585591840251927.jpg"
                      alt="3, PHẢN DIỆN MCU,VŨ TRỤ ĐIỆN ẢNH MARVEL,ÁC NHÂN MARVEL,SIÊU ANH HÙNG,PHIM HAY,DIỄN VIÊN,ANH HÙNG TRONG PHIM,"
                      note=""
                    />
                    <p>
                      Michael B. Jordan đóng vai Erik Killmonger trong phim
                      Black Panther, người anh em họ của T'Challa đang tìm cách
                      trả thù Wakanda. Và phần nhiều khán giả đều công nhận vai
                      phản diện Erik Killmonger do Michael B. Jordan thủ diễn
                      quá tuyệt vời. Tuy nhiên bộ phim Black Panther không phải
                      là tác phẩm <strong>siêu anh hùng</strong> đầu tiên mà anh
                      tham gia. Trước đó, anh từng vào vai Johnny Storm - Human
                      Torch trong tác phẩm “bom xịt” Fantastic Four ra mắt năm
                      2015.
                    </p>
                    <h5>4. Kurt Russell</h5>
                    <p>
                      Trong Guardians of The Galaxy Vol 2, Kurt Russell vào vai
                      Ego, một trong những thực thể mạnh nhất MCU. Ông ta cũng
                      là cha của nhân vật chính Peter Quill, đồng thời là một
                      bạo chúa vô song với âm mưu thôn tính vũ trụ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-3-1629206059630817861635.jpg"
                      alt="4, PHẢN DIỆN MCU,VŨ TRỤ ĐIỆN ẢNH MARVEL,ÁC NHÂN MARVEL,SIÊU ANH HÙNG,PHIM HAY,DIỄN VIÊN,ANH HÙNG TRONG PHIM,"
                      note=""
                    />
                    <p>
                      Nhưng trong bộ phim The Christmas Cronicles, nam{" "}
                      <strong>diễn viên</strong> đóng vai ông già Noel - "anh
                      hùng" chính trong bộ phim này. Trên thực tế, Russell
                      thường xuyên đóng vai nhân vật chính, chẳng hạn như trong
                      Escape from New York, Tango and Cash, Executive Decision
                      và Big Problem ở Little China.{" "}
                    </p>
                    <h5>5. Josh Brolin</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-4-1629206059110340271599.jpeg"
                      alt="5, PHẢN DIỆN MCU,VŨ TRỤ ĐIỆN ẢNH MARVEL,ÁC NHÂN MARVEL,SIÊU ANH HÙNG,PHIM HAY,DIỄN VIÊN,ANH HÙNG TRONG PHIM,"
                      note=""
                    />
                    <p>
                      Josh Brolin đã đóng vai một trong những nhân vật phản diện
                      mang tính biểu tượng nhất trong MCU, Thanos. Tên điên
                      Titan, qua diễn xuất của <strong>diễn viên</strong> Josh
                      Brolin, để lại dấu ấn sâu đậm trên màn ảnh rộng. Thanos
                      cũng là một vai diễn quan trọng trong sự nghiệp của nam
                      tài tử sinh năm 1968 này. Tuy nhiên, cũng trong năm 2018,
                      Josh Brolin còn đóng vai một nhân vật Marvel khác trong
                      Deadpool 2, đó là Cable.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Như vậy, Josh Brolin là diễn viên vô cùng đặc biệt khi
                      đóng vai cả hai nhân vật Marvel nổi tiếng trong hai vũ trụ
                      điện ảnh riêng biệt: Thanos và Cable. Anh cũng đã đóng các
                      nhân vật chính trong các bộ phim khác cũng được dựa trên
                      truyện tranh, đó là Dwight McCarthy trong Sin City: A Dame
                      to Kill For và Jonah Hex trong Jonah Hex.
                    </p>
                    <h5>6. Cate Blanchett</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-5-16292060580861518718509.jpg"
                      alt="6, PHẢN DIỆN MCU,VŨ TRỤ ĐIỆN ẢNH MARVEL,ÁC NHÂN MARVEL,SIÊU ANH HÙNG,PHIM HAY,DIỄN VIÊN,ANH HÙNG TRONG PHIM,"
                      note=""
                    />
                    <p>
                      Trở lại với bộ phim Chúa tể của những chiếc nhẫn, nữ{" "}
                      <strong>diễn viên</strong> Cate Blanchett vào vai nhân vật
                      quý bà Galadriel. Nhưng trong MCU, cô ấy trở thành chị gái
                      của Thần sấm Thor, một người phụ nữ rất nguy hiểm và xấu
                      xa. Vâng, đó chính là vai nữ phản diện Hela trong Thor:
                      Ragnarok.
                    </p>
                    <h5>7. Jake Gyllenhaal</h5>
                    <p>
                      Jake Gyllenhaal đã đóng vai Mysterio trong Spider-Man: Far
                      From Home, người ban đầu là một anh hùng, nhưng sau đó bị
                      phát hiện là kẻ phản diện.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-6-16292060586111110556095.jpg"
                      alt="7, PHẢN DIỆN MCU,VŨ TRỤ ĐIỆN ẢNH MARVEL,ÁC NHÂN MARVEL,SIÊU ANH HÙNG,PHIM HAY,DIỄN VIÊN,ANH HÙNG TRONG PHIM,"
                      note=""
                    />
                    <p>
                      Trong phim Zodiac, Jake vào vai một anh họa sĩ chuyên vẽ
                      họa báo – Robert Graysmith – phối hợp cùng phóng viên Paul
                      và thanh tra Dave trong quá trình truy lùng tên sát nhân
                      cung hoàng đạo.
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
