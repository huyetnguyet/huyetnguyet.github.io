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
"timestamp": '19/08/2021 01:03 PM',
"title": 'Cơ sở khoa học đằng sau Suicide Squad: Sao biển sở hữu toàn "skill" đỉnh thế này, bảo sao phản diện Starro lại bá đạo đến thế!',
"description": 'Sao biển có thị giác rất nhạy bén, sở hữu khả năng tái sinh và nhân bản ấn tượng và là một kẻ săn mồi chuyên nghiệp - tất cả đều là cảm hứng để tạo nên một quái thú Starro đáng sợ trong bom tấn The Suicide Squad.',
"src": '',
"alt": 'SAO BIỂN,JAMES GUNN,SUICIDE SQUAD,DC,THE SUICIDE SQUAD,SIÊU ANH HÙNG,',
"category": 'news',
"date": '19/08/2021',
"time": '01:03 PM',
"link": '/co-so-khoa-hoc-dang-sau-suicide-squad-sao-bien-so-huu-toan-skill-dinh-the-nay-bao-sao-phan-dien-starro-lai-ba-dao-den-the',
"zcomponent": 'page_20210819130320',
"filepath": './20210819130320-co-so-khoa-hoc-dang-sau-suicide-squad-sao-bien-so-huu-toan-skill-dinh-the-nay-bao-sao-phan-dien-starro-lai-ba-dao-den-the.js'
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
  'Cơ sở khoa học đằng sau Suicide Squad: Sao biển sở hữu toàn "skill" đỉnh thế này, bảo sao phản diện Starro lại bá đạo đến thế!';
const author = "DG";
const source = "Pháp luật đời sống";
const timestamp = "19/08/2021 01:03 PM";
const description =
  "Sao biển có thị giác rất nhạy bén, sở hữu khả năng tái sinh và nhân bản ấn tượng và là một kẻ săn mồi chuyên nghiệp - tất cả đều là cảm hứng để tạo nên một quái thú Starro đáng sợ trong bom tấn The Suicide Squad.";
const link =
  "co-so-khoa-hoc-dang-sau-suicide-squad-sao-bien-so-huu-toan-skill-dinh-the-nay-bao-sao-phan-dien-starro-lai-ba-dao-den-the";
const tagparam = [
  "SAO BIỂN",
  "JAMES GUNN",
  "SUICIDE SQUAD",
  "DC",
  "THE SUICIDE SQUAD",
  "SIÊU ANH HÙNG",
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

export default function page_20210819130320() {
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
                      Đúng như kỳ vọng, đạo diễn <strong>James Gunn</strong> đã
                      mang đến một <strong>Suicide Squad</strong> vừa hài hước,
                      lầy lội, lại vừa hoành tráng và có đôi chút cảm động.
                      Không chỉ tập hợp một đội ngũ nhân vật hùng hậu (mà đa
                      phần đều bị sát hại ngay trong vài phút đầu phim), Gunn
                      còn mang đến một phản diện kỳ lạ bậc nhất trong vũ trụ{" "}
                      <strong>DC</strong>: Starro - con{" "}
                      <strong>sao biển</strong> vũ trụ khổng lồ.
                    </p>
                    <p>
                      Trong thực tế, không có sinh vật biển nào có thể hoàn toàn
                      kiểm soát, thao túng và điều khiến tâm trí và cơ thể con
                      người, ít nhất là tính đến thời điểm hiện tại. Tuy nhiên,
                      loài <strong>sao biển</strong> cũng sở hữu một vài khả
                      năng ấn tượng mà đội ngũ <strong>DC</strong> đã khai thác
                      thành công để xây dựng phản diện chính trong The{" "}
                      <strong>Suicide Squad</strong>. Suy cho cùng, các tác phẩm
                      khoa học viễn tưởng dù mang đến rất nhiều lý thuyết, công
                      nghệ hư cấu, nhưng đều phần nào đó dựa trên cơ sở thực
                      tiễn và mang tính logic nhất định để thuyết phục người
                      xem. Và Starro trong <strong>The Suicide Squad</strong>{" "}
                      cũng không ngoại lệ.
                    </p>
                    <h5>Thị lực nhạy bén</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-1-16292938268231774715637.jpg"
                      alt="1, SAO BIỂN,JAMES GUNN,SUICIDE SQUAD,DC,THE SUICIDE SQUAD,SIÊU ANH HÙNG,"
                      note="Trong thực tế, sao biển không có con mắt siêu to khổng lồ thế này đâu nhé!"
                    />
                    <p>
                      Mặc dù <strong>sao biển</strong> không có nhãn cầu khổng
                      lồ ở trung tâm cơ thể như Starro, nhưng chúng cũng sở hữu
                      đôi mắt cho riêng mình, giống như đa số các loài sinh vật
                      khác. Khoảng 200 năm trước, giới khoa học đã phát hiện ra
                      một vài loài sao biển “mọc” mắt kép (compound eyes) ở phần
                      đầu mỗi “cánh sao” của mình. Tuy nhiên khi đó, họ vẫn chưa
                      thể kết luận được liệu những đôi mắt này có khả năng hình
                      thành hình ảnh hay ảnh hưởng đến tập tính của sao biển hay
                      không.
                    </p>
                    <p>
                      Trong nhiều năm gần đây, giới nghiên cứu đã bắt đầu quan
                      sát hành vi của <strong>sao biển</strong> nhiều hơn bởi
                      chúng có liên quan đến việc điều hướng các rạn san hô. Họ
                      phát hiện ra những cặp mắt kép nêu trên đều thuộc dạng
                      nguyên thủy, với độ phân giải không gian thấp nhưng lại
                      mang đến nhiều lợi ích hơn những gì chúng ta đã biết trước
                      đây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-1-162929382776986570797.jpg"
                      alt="2, SAO BIỂN,JAMES GUNN,SUICIDE SQUAD,DC,THE SUICIDE SQUAD,SIÊU ANH HÙNG,"
                      note="Sao biển quan sát môi trường xung quanh bằng đôi mắt kép trên các chi của mình."
                    />
                    <p>
                      Theo nghiên cứu này, những con <strong>sao biển</strong>{" "}
                      bị tách ra khỏi ngôi nhà của mình, các rạn san hô, và đưa
                      đến 1 nơi khác. Tuy nhiên, nếu rạn san hô đó vẫn nằm trong
                      khoảng hơn 30 độ trường thị giác của chúng thì chúng vẫn
                      sẽ tìm được đường trở về nhà. Điều này cho thấy đôi mắt
                      kép của sao biển không chỉ có khả năng phát hiện ra ánh
                      sáng, mà còn thực sự có thể tạo ra hình ảnh chân thực.
                      Nghiên cứu sâu hơn của Ronald Petie, Anders Garm và
                      Michael R. Hall cho thấy những con sao biển bị mù thì lại
                      không thể trở lại rạn san hô của mình. Vì vậy, ngoài thị
                      giác ra, sao biển không sử dụng giác quan nào khác trong
                      việc định hướng và nhận biết thông tin về môi trường xung
                      quanh.
                    </p>
                    <p>
                      Mắt <strong>sao biển</strong> được coi là đại diện cho hệ
                      thống thị giác tiên tiến nhất trong các loài động vật da
                      gai. Ấn tượng hơn cả, sao biển sở hữu hệ thần kinh trung
                      ương không thực sự phát triển. Thay vào đó, các thông tin
                      về hình ảnh sẽ được thu vào và xử lý ngay trong đôi mắt
                      của chúng. Sự phân cấp thần kinh và các cơ quan quan trọng
                      trong cơ thể giúp sao biển sở hữu 1 khả năng cực kỳ bá đạo
                      mà chúng ta sẽ tìm hiểu trong phần dưới đây.
                    </p>
                    <h5>"Cao thủ" tái sinh và nhân bản</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-2-162929382828360296768.png"
                      alt="3, SAO BIỂN,JAMES GUNN,SUICIDE SQUAD,DC,THE SUICIDE SQUAD,SIÊU ANH HÙNG,"
                      note="Sao biển sở hữu khả năng tái sinh và nhân bản cực ấn tượng, dù tốc độ không thể nhanh như Starro trên phim."
                    />
                    <p>
                      Tất cả các loài động vật đều sở hữu khả năng tự hồi phục
                      vết thương ở những cấp độ nhất định, kể cả con người. Tuy
                      nhiên, xét đến khía cạnh “tái sinh” thì{" "}
                      <strong>sao biển</strong> mới thực sự là cao thủ vì nhiều
                      lý do khác nhau. Đầu tiên, cấu tạo cơ thể của chúng khá
                      đơn giản, đơn giản hơn rất nhiều nếu chúng ta so sánh với
                      loài người. Vì vậy, quá trình tự hồi phục của chúng diễn
                      ra không quá phức tạp. Ngoài ra, sao biển cũng có thừa các
                      cơ quan quan trọng, bởi mỗi “cánh sao” đều sở hữu tất cả
                      những bộ phận, thành phần cần thiết cho riêng mình.
                    </p>
                    <p>
                      Quan trọng hơn cả, <strong>sao biển</strong> có khả năng
                      biệt hóa tế bào ở cấp độ cao ngay cả khi chúng đã hơi “có
                      tuổi”. Hiểu 1 cách đơn giản nhất, chúng có thể lựa chọn
                      giữa việc giữ lại các tế bào gốc, hoặc biệt hóa các tế bào
                      trưởng thành trở lại thành tế bào gốc ban đầu. Kết quả là
                      chúng có thể mọc lại những bộ phận bị thiếu, bị đứt, miễn
                      là phần cơ thể chính vẫn còn lành lặn. Và mức độ lành lặn
                      là bao nhiêu lại tùy thuộc vào từng loài sao biển khác
                      nhau.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trường hợp phổ biến nhất chính là khi các chi của{" "}
                      <strong>sao biển</strong> tự mọc lại sau khi bị đứt rời.
                      Lúc đó, một chi mới sẽ được sinh ra từ đĩa đệm trung tâm,
                      với kích thước ban đầu khá nhỏ và rồi lớn dần theo thời
                      gian cho đến khi ăn khớp với cơ thể. Quá trình này thường
                      kéo dài ít nhất trong 1 năm trước khi hoàn toàn hoàn
                      thiện. Tuy nhiên, đây là quá trình 1 chiều: 1 con sao biển
                      có thể mọc lại “cánh sao” từ cơ thể của mình, nhưng “cánh
                      sao” bị đứt trước đó thì gần như không thể mọc ra một cơ
                      thể mới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-3-1629293829294334062173.jpg"
                      alt="4, SAO BIỂN,JAMES GUNN,SUICIDE SQUAD,DC,THE SUICIDE SQUAD,SIÊU ANH HÙNG,"
                      note="Các chi mới mọc ra từ cơ thể gốc của sao biển."
                    />
                    <p>
                      Tại sao lại là “gần như không thể” mà không phải “tuyệt
                      đối không thể”? Lý do là bởi trong 1 số trường hợp hi hữu,
                      một mảnh nhỏ của đĩa đệm trung tâm bị gãy ra cùng với chi
                      bị đứt, và nó sẽ giúp tái tạo lại một cơ thể mới từ chính
                      chi này và tạo ra 1 con <strong>sao biển</strong> khá
                      giống với bản gốc. Ngoài ra, cũng có một số loài đặc biệt
                      không cần đến đĩa đệm trung tâm để thực hiện quá trình tái
                      sinh này theo cả 2 chiều ngược - xuôi.
                    </p>
                    <p>
                      Đây cũng là cơ chế sinh sản của một vài loài{" "}
                      <strong>sao biển</strong> trong thực tế: Chúng tự ý tách
                      đĩa đệm trung tâm ra, và rồi các cá thể mới sẽ tự mọc lại
                      những bộ phận còn thiếu. Các nhà nghiên cứu đã chỉ ra rằng
                      những con sao biển sinh sản theo hình thức này thường có
                      tuổi thọ cao hơn. Đó chính là cơ sở khoa học cho ý tưởng
                      Starro tự tạo ra những bản sao nhỏ của bản thân mình như
                      chúng ta đã thấy trong The <strong>Suicide Squad</strong>,
                      chỉ khác biệt ở chỗ chúng hình thành và hoàn thiện rất
                      nhanh thay vì phải trải qua ít nhất 1 năm như đã đề cập ở
                      trên.
                    </p>
                    <h5>Những kẻ săn mồi thượng hạng</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-4-16292938288001642827757.jpg"
                      alt="5, SAO BIỂN,JAMES GUNN,SUICIDE SQUAD,DC,THE SUICIDE SQUAD,SIÊU ANH HÙNG,"
                      note="Sao biển gai, một trong những sát thủ săn mồi chuyên nghiệp nhất."
                    />
                    <p>
                      Nhìn chung, <strong>sao biển</strong> là một sinh vật vừa
                      ngoan vừa hiền, thường thong thả dạo chơi dưới đáy biển,
                      không làm gì nhiều ngoài việc tỏa ra khí chất cool ngầu
                      nhờ đặc điểm ngoại hình bên ngoài. Tuy nhiên, chớ nhìn
                      hình dáng mà bắt hình dong, bởi chúng là những tay săn mồi
                      siêu hạng đấy! Nguồn thức ăn chủ yếu của sao biển là trai,
                      sò và hàu. Chúng sử dụng các giác hút trên những “cánh
                      sao” của mình để cạy vỏ của con mồi, sau đó đưa dạ dày ra
                      khỏi cơ thể của mình để ăn trọn những gì bên trong lớp vỏ
                      trai, sò, giống như cách đàn em của Starro chụp mặt con
                      người và thao túng họ vậy.
                    </p>
                    <p>
                      Đương nhiên, sẽ có những loài <strong>sao biển</strong>{" "}
                      hung hãn và nguy hiểm hơn cả. Và nếu phải chọn ra Starro
                      trong đời thực, đó có lẽ là sao biển gai (crown-of-thorns
                      starfish). Đây cũng chính là loài sao biển có kích thước
                      lớn nhất, với đường kính lên đến 80cm. Trên lớp vỏ sặc sỡ
                      của chúng mọc ra tua tủa những chiếc gai độc sắc nhọn,
                      không khác gì những quái vật vũ trụ hư cấu bước ra từ
                      trong truyện tranh cả.
                    </p>
                    <p>
                      <strong>Sao biển</strong> gai thường di chuyển trên các
                      rạn san hô và ăn san hô đá theo đúng cơ chế đưa dạ dày ra
                      ngoài để đớp mồi như đã nêu trên. Các enzym tiêu hóa của
                      chúng sẽ biến những mô mềm của san hô thành chất lỏng để
                      tiêu thụ, cứ như vậy cho đến khi chỉ còn bộ xương đá vôi
                      còn sót lại. Hiểu 1 cách đơn giản, đây giống như quá trình
                      lóc sạch thịt từ xương của con mồi vậy. Một con sao biển
                      gai có thể tiêu thụ từ 5 - 13 mét vuông san hô mỗi năm. Và
                      trong tình trạng “đất chật sao đông”, tốc độ ăn của chúng
                      thậm chí còn nhanh hơn rất nhiều so với tốc độ tái sinh,
                      mọc lại của san hô.
                    </p>
                    <p>Theo syfy</p>
                    <p></p>
                    <p></p>
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
