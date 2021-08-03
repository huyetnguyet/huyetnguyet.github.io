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
"timestamp": '29/06/2021 09:49 PM',
"title": '8 gia đình "có số má" nhất thế giới anime, xứng danh "cha ông mạnh, con cháu cũng phải mạnh"',
"description": 'Theo bạn đâu là gia đình mạnh nhất trong thế giới anime?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-1-16244438362121929745127.jpg',
"alt": 'GIA ĐÌNH ANIME,DRAGON BALL,KENGAN ASHURA,FULLMETAL ALCHEMIST,BAKI,GIA ĐÌNH JOESTAR,',
"category": 'games',
"date": '29/06/2021',
"time": '09:49 PM',
"link": '/8-gia-dinh-co-so-ma-nhat-the-gioi-anime-xung-danh-cha-ong-manh-con-chau-cung-phai-manh',
"zcomponent": 'page_20210629214910',
"filepath": './20210629214910-8-gia-dinh-co-so-ma-nhat-the-gioi-anime-xung-danh-cha-ong-manh-con-chau-cung-phai-manh.js'
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
  '8 gia đình "có số má" nhất thế giới anime, xứng danh "cha ông mạnh, con cháu cũng phải mạnh"';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:49 PM";
const description = "Theo bạn đâu là gia đình mạnh nhất trong thế giới anime?";
const link =
  "8-gia-dinh-co-so-ma-nhat-the-gioi-anime-xung-danh-cha-ong-manh-con-chau-cung-phai-manh";
const tagparam = [
  "GIA ĐÌNH ANIME",
  "DRAGON BALL",
  "KENGAN ASHURA",
  "FULLMETAL ALCHEMIST",
  "BAKI",
  "GIA ĐÌNH JOESTAR",
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

export default function page_20210629214910() {
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
                      Trong thế giới anime, đặc biệt là thể loại shonen, một
                      nhân vật chính mạnh mẽ thường xuất thân từ một gia đình
                      mạnh mẽ. Vậy hãy cùng nhau điểm qua những gia đình mạnh mẽ
                      đó ở dưới đây nhé!
                    </p>
                    <h5>1. Gia đình Monkey - One Piece</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-1-16244438362121929745127.jpg"
                      alt="1, GIA ĐÌNH ANIME,DRAGON BALL,KENGAN ASHURA,FULLMETAL ALCHEMIST,BAKI,GIA ĐÌNH JOESTAR,"
                      note=""
                    />
                    <p>
                      Gia đình Monkey hiện bao gồm Monkey D. Luffy, Monkey D.
                      Dragon và Monkey D. Garp. Bản thân Luffy là một trong
                      những tên cướp biển nhận được sự chú ý từ nhiều nhân vật
                      mạnh khác nhau từ cả phía hải tặc và hải quân. Garp được
                      mệnh danh là anh hùng trong hải quân vì những cống hiến
                      của anh trong quá khứ, bao gồm cả việc chiến đấu với hải
                      tặc huyền thoại Rocks. Còn Dragon - con trai của Garp và
                      cha của Luffy là kẻ bị truy nã gắt gao nhất trên thế giới
                      vì là thủ lĩnh quân đội cách mạng.
                    </p>
                    <h5>2. Gia đình Uzumaki - Naruto và Boruto</h5>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-1-1624443837496189894274.jpeg"
                      alt="2, GIA ĐÌNH ANIME,DRAGON BALL,KENGAN ASHURA,FULLMETAL ALCHEMIST,BAKI,GIA ĐÌNH JOESTAR,"
                      note=""
                    />
                    <p>
                      Gia tộc Uzumaki trong Naruto to Boruto là một gia tộc rất
                      mạnh, nổi tiếng với các thành viên sở hữu trữ lượng chakra
                      lớn và nhẫn thuật phong ấn đặc biệt của họ. Mặc dù gia tộc
                      này đã bị tiêu diệt cùng với sự cố ở làng Xoáy Nước nhưng
                      những người còn sống cho đến nay đều được biết đến là rất
                      mạnh.
                    </p>
                    <p>
                      Ví dụ, Ashina Uzumaki, Mito Uzumaki đều thành Jinchuriki
                      của Kurama hay nhân vật chính Naruto Uzumaki đã trở thành
                      nhẫn giả mạnh nhất thế giới. Sau đó, thế hệ kế tiếp của họ
                      có Himawari và Boruto đều có những khả năng tuyệt vời.
                      Himawari có tài năng Byakugan phi thường còn Boruto có sức
                      mạnh của gia tộc Otsutsuki.{" "}
                    </p>
                    <h5>3. Gia đình Zoldyck - Hunter x Hunter</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-2-1624443837994447898961.jpg"
                      alt="3, GIA ĐÌNH ANIME,DRAGON BALL,KENGAN ASHURA,FULLMETAL ALCHEMIST,BAKI,GIA ĐÌNH JOESTAR,"
                      note=""
                    />
                    <p>
                      Gia đình Zoldyck là một trong những cái tên đáng sợ nhất
                      trên thế giới Hunter x Hunter. Truyền thống của gia đình
                      Zoldyck từ trước đến nay là các thành viên đều là những
                      sát thủ khét tiếng. Do đó, ngay từ khi còn nhỏ, mỗi thành
                      viên thuộc dòng họ Zoldyck đều phải trải qua 1 khóa huấn
                      luyện đặc biệt giúp họ trở thành những sát thủ xuất sắc
                      nhất.
                    </p>
                    <p>
                      Thế nên, dù có quan hệ máu mủ nhưng hầu hết mọi người
                      trong gia đình Zoldyck đều có các mối quan hệ, tương tác
                      "kỳ lạ" với nhau. Cũng bởi vì họ đã được dạy cách phải kìm
                      nén cảm xúc để trở nên lạnh lùng.
                    </p>
                    <h5>
                      4. <strong>Gia đình Joestar</strong> - JoJo's Bizarre
                      Adventure
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-3-1624443838503605631319.jpg"
                      alt="4, GIA ĐÌNH ANIME,DRAGON BALL,KENGAN ASHURA,FULLMETAL ALCHEMIST,BAKI,GIA ĐÌNH JOESTAR,"
                      note=""
                    />
                    <p>
                      Bắt đầu từ Jonathan, <strong>gia đình Joestar</strong>{" "}
                      trongJoJo's Bizarre Adventure có rất nhiều chiến binh mạnh
                      mẽ. Để thấy rõ điều này chúng ta hãy nhìn vào Joseph,
                      người khi còn trẻ đã từng chiến đấu với ba sinh vật hùng
                      mạnh, cụ thể là Pillar Men. Sau đó là Jotaro, đứa trẻ có
                      thể đánh bại ma cà rồng DIO. Kế đến là Jolyne (con trai
                      của Jotaro) và Josuke Higashikata (con ngoài giá thú của
                      Joseph) cả hai đều rất đáng kinh ngạc. Quả thật, Joestar
                      thực sự là một trong những gia tộc mạnh nhất trong anime.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>5. Gia đình Hanma - Baki</h5>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-4-1624443839544856282813.jpg"
                      alt="5, GIA ĐÌNH ANIME,DRAGON BALL,KENGAN ASHURA,FULLMETAL ALCHEMIST,BAKI,GIA ĐÌNH JOESTAR,"
                      note=""
                    />
                    <p>
                      Trong thế giới của <strong>Baki</strong>, gia đình Hanma
                      là những con người mạnh nhất trên thế giới. Yujiro đã thực
                      sự trở thành người mạnh nhất trong thế giới của Baki. Hay
                      cha của Yujiro - Yuichiro từng có thể một tay đối phó với
                      quân Mỹ trong Thế chiến thứ hai.
                    </p>
                    <p>
                      Còn <strong>Baki</strong>, anh chàng vẫn đang phát triển,
                      nhưng cho đến nay anh đã bắt đầu có thể chiến đấu chống
                      lại cha mình. Ngoài ra, nếu Baki phải đối đầu với kẻ thù
                      không phải là cha mình (chẳng hạn như Biscuit Olvia - tù
                      nhân mạnh nhất Hoa Kỳ), Baki cũng sẽ chiến thắng.
                    </p>
                    <h5>6. Gia đình Elric - Fullmetal Alchemist</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-5-16244438375211078418838.jpg"
                      alt="6, GIA ĐÌNH ANIME,DRAGON BALL,KENGAN ASHURA,FULLMETAL ALCHEMIST,BAKI,GIA ĐÌNH JOESTAR,"
                      note=""
                    />
                    <p>
                      Van Hohenheim là một trong những nhân vật mạnh nhất trong{" "}
                      <strong>Fullmetal Alchemist</strong>. Ông cũng là cha của
                      anh em Elric. Vì bi kịch mà họ đã trải qua, Alphonse và
                      Edward Elric đã phát triển thành một thế lực không thể xem
                      thường trong thế giới FMA. Sức mạnh của họ có thể vẫn còn
                      kém nhiều nhân vật khác trong FMA, nhưng họ có thể đối mặt
                      được với những mối đe dọa nguy hiểm như Homunculus. Vì
                      vậy, họ xứng đáng được xếp vào danh sách những gia tộc
                      mạnh nhất trong anime.
                    </p>
                    <h5>7. Gia đình Kure - Kengan Ashura</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-6-16244438390321246367805.jpg"
                      alt="7, GIA ĐÌNH ANIME,DRAGON BALL,KENGAN ASHURA,FULLMETAL ALCHEMIST,BAKI,GIA ĐÌNH JOESTAR,"
                      note=""
                    />
                    <p>
                      Giống như gia đình Zoldyck, gia tộc Kure ở Kengan Asura là
                      một gia đình sát thủ cha truyền con nối. Hầu hết họ là
                      những người tốt, và có thể hòa nhập hoàn hảo trong xã hội.
                      Mặc dù vậy, họ đều là những chiến binh đáng gờm có thể dễ
                      dàng giết chết những tên côn đồ bình thường. Trong số các
                      thành viên gia đình này cũng có những chiến binh thực sự
                      đáng sợ, chẳng hạn như Raian Kure (anh ta mạnh đến mức có
                      thể đánh bại kẻ thù mà không cần sử dụng kỹ thuật), Karla
                      Kure, và Erioh Kure.
                    </p>
                    <h5>8. Gia đình Son - Dragon Ball</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/23/photo-7-162444384005113635920.jpg"
                      alt="8, GIA ĐÌNH ANIME,DRAGON BALL,KENGAN ASHURA,FULLMETAL ALCHEMIST,BAKI,GIA ĐÌNH JOESTAR,"
                      note=""
                    />
                    <p>
                      Gia đình Son Goku cho đến nay vẫn là một trong những gia
                      đình mạnh nhất trong anime. Đầu tiên là Son Goku - người
                      hiện là một trong những sinh vật mạnh nhất trong Vũ trụ 7.
                      Đặc biệt là sau khi anh ta có thể sử dụng Bản năng vô cực
                      hoàn hảo.
                    </p>
                    <p>
                      Những đứa con của Goku như Gohan và Goten cũng rất mạnh.
                      Gohan thực sự có tiềm năng trở thành tân chiến binh mạnh
                      nhất kể từ Cell Saga, nhưng anh ta không có động lực để
                      trở nên mạnh mẽ như cha mình và Vegeta. Trước Goku,
                      Bardock được cho là một chiến binh khá mạnh của tộc
                      Saiyan.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
