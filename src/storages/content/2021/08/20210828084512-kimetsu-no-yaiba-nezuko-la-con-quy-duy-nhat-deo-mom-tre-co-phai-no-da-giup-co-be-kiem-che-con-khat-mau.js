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
"timestamp": '28/08/2021 08:45 AM',
"title": 'Kimetsu no Yaiba: Nezuko là con quỷ duy nhất đeo mõm tre, có phải nó đã giúp cô bé kiềm chế cơn khát máu?',
"description": 'Đã bao giờ các bạn thắc mắc tại sao sau khi hóa quỷ Nezuko phải đeo ống tre chưa?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/tanjiro-holds-off-frenzied-nezuko-16299660015721702743896.jpg',
"alt": 'NEZUKO,MÕM TRE,ỐNG TRE,KIMETSU NO YAIBA,CON QUỶ NEZUKO,TANJIRO,',
"category": 'games',
"date": '28/08/2021',
"time": '08:45 AM',
"link": '/kimetsu-no-yaiba-nezuko-la-con-quy-duy-nhat-deo-mom-tre-co-phai-no-da-giup-co-be-kiem-che-con-khat-mau',
"zcomponent": 'page_20210828084512',
"filepath": './20210828084512-kimetsu-no-yaiba-nezuko-la-con-quy-duy-nhat-deo-mom-tre-co-phai-no-da-giup-co-be-kiem-che-con-khat-mau.js'
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
  "Kimetsu no Yaiba: Nezuko là con quỷ duy nhất đeo mõm tre, có phải nó đã giúp cô bé kiềm chế cơn khát máu?";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:45 AM";
const description =
  "Đã bao giờ các bạn thắc mắc tại sao sau khi hóa quỷ Nezuko phải đeo ống tre chưa?";
const link =
  "kimetsu-no-yaiba-nezuko-la-con-quy-duy-nhat-deo-mom-tre-co-phai-no-da-giup-co-be-kiem-che-con-khat-mau";
const tagparam = [
  "NEZUKO",
  "MÕM TRE",
  "ỐNG TRE",
  "KIMETSU NO YAIBA",
  "CON QUỶ NEZUKO",
  "TANJIRO",
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

export default function page_20210828084512() {
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
                      <strong>Nezuko</strong> là nhân vật chủ chốt trong{" "}
                      <strong>Kimetsu no Yaiba</strong>, là nhân tố khiến các
                      kiếm sĩ diệt quỷ khác phải nhìn nhận lại bản chất loài
                      quỷ. Không những thế, cô bé còn được ưu ái gọi là "em gái
                      quốc dân" nhờ tính cách trong sáng và ngoại hình dễ thương
                      của mình. Bên cạnh đôi mắt màu hồng phấn và bộ kimono màu
                      hồng giúp Nezuko ghi điểm trong lòng khán giả, thì chiếc{" "}
                      <strong>ống tre</strong> nhỏ mà cô ấy luôn giữ trên miệng
                      đã khiến cô trở nên khác biệt so với các nhân vật khác
                      trong truyện. Tuy nhiên, chiếc ống tre nhỏ của Nezuko
                      không phải là vật chỉ để trang trí, mà còn để kiểm soát sự
                      khát máu của loài quỷ từ bên trong cô bé.
                    </p>
                    <p>
                      Khi gia đình của anh em Kamado <strong>Tanjiro</strong> và{" "}
                      <strong>Nezuko</strong> bị tàn sát một cách tàn nhẫn,
                      Nezuko đã bị biến thành một con quỷ. Mặc dù bản năng giết
                      người của loài quỷ trong Nezuko ban đầu đã thúc đẩy cô tấn
                      công anh trai của mình, nhưng một phép màu nào đó đã khiến
                      cô vượt qua được sự khát máu, thay vào đó là yêu thương và
                      bảo vệ con người.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/nezuko-sparkles-16299660526681272745433.jpg"
                      alt="1, NEZUKO,MÕM TRE,ỐNG TRE,KIMETSU NO YAIBA,CON QUỶ NEZUKO,TANJIRO,"
                      note="Cán rìu của Tanjiro đã chặn lại khuôn miệng với những chiếc răng nanh khát máu của Nezuko."
                    />
                    <p>
                      Còn nhớ, <strong>Nezuko</strong> lần đầu tiên nhận được{" "}
                      <strong>mõm tre</strong> là trong tập 1 của{" "}
                      <strong>Kimetsu no Yaiba</strong>. Sau khi Nezuko bị biến
                      thành một con quỷ, kiếm sĩ diệt quỷ Giyu Tomioka đã có ý
                      định hạ gục cô bé vì cơn đói dữ dội đã khiến cô tấn công{" "}
                      <strong>Tanjiro</strong>. Tuy nhiên, khi Giyu nhận ra sự
                      thay đổi trái tim của Nezuko, anh đã bị choáng váng trước
                      những nỗ lực kỳ diệu của cô để bảo vệ anh trai mình. Thay
                      vì giết, anh ta đánh cô bất tỉnh và đặt{" "}
                      <strong>ống tre</strong> vào miệng cô để ngăn chặn khả
                      năng cắn bằng nanh của cô bé.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/tanjiro-holds-off-frenzied-nezuko-16299660015721702743896.jpg"
                      alt="2, NEZUKO,MÕM TRE,ỐNG TRE,KIMETSU NO YAIBA,CON QUỶ NEZUKO,TANJIRO,"
                      note=""
                    />

                    <p>
                      Chiếc <strong>mõm tre</strong> đã giúp ngăn cô cắm răng
                      của mình vào con người và cũng không thể tự cắn mình, dù
                      cố ý hay vô tình. Dù <strong>ống tre</strong> đã giúp ngăn
                      chặn cơn đói của <strong>Nezuko</strong>, nhưng nó không
                      phải là một dụng cụ ma thuật làm vô hiệu hóa hoàn toàn sự
                      hung hăng của cô ấy đối với con người, khả năng hiếm có đó
                      là do ý chí bền chặt của Nezuko. Bên cạnh đó, những nỗ lực
                      của Urodokai giúp thôi miên Nezuko coi tất cả con người
                      như một gia đình cũng giúp cô chống lại con quỷ bên trong
                      mình.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Vấn đề là, nếu <strong>Nezuko</strong> đã được thôi miên
                      để yêu quý con người, tại sao cô ấy vẫn cần đeo{" "}
                      <strong>mõm tre</strong>. Mặc dù <strong>ống tre</strong>{" "}
                      có thể không phải là chìa khóa để giúp Nezuko kiểm soát
                      bản chất khát máu của loài quỷ, nhưng nó vẫn có những tác
                      dụng thiết yếu. Với miệng bị chặn một cách an toàn, không
                      có cơ hội để Nezuko vô tình lấy máu người trong miệng,
                      điều có thể khiến cô ấy trở nên dã man và đảo ngược quá
                      trình trở thành một con quỷ yêu thương con người.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/26/photo-1-162996608073186120726.jpg"
                      alt="3, NEZUKO,MÕM TRE,ỐNG TRE,KIMETSU NO YAIBA,CON QUỶ NEZUKO,TANJIRO,"
                      note=""
                    />

                    <p>
                      Có thể nói, <strong>mõm tre</strong> đóng vai trò như một
                      vật phong ấn, vừa để "ngăn chặn" lại vừa để "bảo vệ" và
                      giúp cô bé che giấu các đặc điểm của loài quỷ, thể hiện cô
                      ấy giống như một biểu tượng của hòa bình. Khi đeo{" "}
                      <strong>ống tre</strong>, <strong>Nezuko</strong> trông
                      cũng chẳng khác gì những con người khác cả, giúp cô dễ
                      dàng trà trộn vào thế giới con người hơn, nhưng những thợ
                      săn quỷ có thể nhìn thấu được lớp vỏ bọc này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/26/he-calls-nezuko-beautiful-1-16299659845651867377932.jpg"
                      alt="4, NEZUKO,MÕM TRE,ỐNG TRE,KIMETSU NO YAIBA,CON QUỶ NEZUKO,TANJIRO,"
                      note=""
                    />

                    <p>
                      Đặc biệt các Trụ cột - nhưng người vô cùng căm ghét loài
                      quỷ cũng đã phải mềm lòng trước một con quỷ như{" "}
                      <strong>Nezuko</strong>. Chính sự tồn tại của cô bé đã làm
                      thay đổi quan điểm về bản chất loài quỷ của hầu hết các
                      nhân vật khác trong truyện. Cô bé cũng chính là nhân vật
                      chủ chốt khiến cho <strong>Tanjiro</strong> luôn đứng giữa
                      lằn ranh trung lập, làm cầu nối cho hai giống loài Quỷ và
                      Người.
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
