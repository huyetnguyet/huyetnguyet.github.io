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
"timestamp": '19/08/2021 12:57 PM',
"title": 'Chỉ 1 phút chỉnh niềng răng mà tạo ra khoảnh khắc "để đời", phải công nhận Joy (Red Velvet) thời MAMA 2017 đúng là cực phẩm!',
"description": 'Sự thật đằng sau bức ảnh "để đời" được Joy kể lại làm fan cười ngất, tuy nhiên ai cũng phải công nhận, visual tại MAMA năm ấy là thời kỳ đỉnh cao nhất của cô nàng.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo2021-08-1608-16-52-16290768233691043931960.jpg',
"alt": 'red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,',
"category": 'stars',
"date": '19/08/2021',
"time": '12:57 PM',
"link": '/chi-1-phut-chinh-nieng-rang-ma-tao-ra-khoanh-khac-de-doi-phai-cong-nhan-joy-red-velvet-thoi-mama-2017-dung-la-cuc-pham',
"zcomponent": 'page_20210819125757',
"filepath": './20210819125757-chi-1-phut-chinh-nieng-rang-ma-tao-ra-khoanh-khac-de-doi-phai-cong-nhan-joy-red-velvet-thoi-mama-2017-dung-la-cuc-pham.js'
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
  'Chỉ 1 phút chỉnh niềng răng mà tạo ra khoảnh khắc "để đời", phải công nhận Joy (Red Velvet) thời MAMA 2017 đúng là cực phẩm!';
const author = "SÓC,";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:57 PM";
const description =
  'Sự thật đằng sau bức ảnh "để đời" được Joy kể lại làm fan cười ngất, tuy nhiên ai cũng phải công nhận, visual tại MAMA năm ấy là thời kỳ đỉnh cao nhất của cô nàng.';
const link =
  "chi-1-phut-chinh-nieng-rang-ma-tao-ra-khoanh-khac-de-doi-phai-cong-nhan-joy-red-velvet-thoi-mama-2017-dung-la-cuc-pham";
const tagparam = [
  "red velvet",
  "Joy (Red Velvet)",
  "Irene (Red Velvet)",
  "Red Velvet (SM)",
  "Joy",
  "MAMA",
  "Red Velvet comeback 2021",
  "red velvet comeback",
  "Red Velvet come back",
  "Joy debut solo",
  "joy red velvet",
  "joy (red velvet) hát nhép",
  "người đẹp",
  "idol Kpop",
  "Moment",
  "viral",
  "video viral",
  "sexy",
  "sao sexy",
  "Cũ Rồi Đào Lại Cho Mới",
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

export default function page_20210819125757() {
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
                      Sự thật đằng sau bức ảnh "để đời" được{" "}
                      <strong>Joy</strong> kể lại làm fan cười ngất, tuy nhiên
                      ai cũng phải công nhận, visual tại <strong>MAMA</strong>{" "}
                      năm ấy là thời kỳ đỉnh cao nhất của cô nàng.
                    </p>
                    <p>
                      Vào ngày 12/8, trước thềm comeback đầu tiên cho năm 2021,{" "}
                      <strong>Red Velvet</strong> đã có dịp xuất hiện trên
                      chương trình MMTG. Trong chương trình Red Velvet đã có dịp
                      nhìn lại và tiết lộ những câu chuyện đằng sau loạt ảnh gây{" "}
                      <strong>viral</strong> một thời của mình. Đối với{" "}
                      <strong>Joy</strong>, cô nàng được MC Jaejae đặt câu hỏi
                      về bức ảnh "gây thương nhớ" trong lễ trao giải{" "}
                      <strong>MAMA</strong> 2017.
                    </p>
                    <p>
                      Bức ảnh "gây thương nhớ" cực mạnh của <strong>Joy</strong>
                      ...
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo2021-08-1609-37-16-1629081460714561746252.jpg"
                      alt="10, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note=""
                    />
                    <p>... được MC Jaejae "đào lại" trong MMTG</p>
                    <p>
                      Trước câu hỏi này, <strong>Joy</strong> đã tiết lộ đằng
                      sau bức ảnh "gây sóng gió" một thời này là một kỷ niệm
                      không mấy vui vẻ của cô nàng. Sự thật được Joy chia sẻ
                      rằng: "Lúc ấy em đang niềng răng đó ạ. Thật ra hôm trao
                      giải ấy niềng răng của em bị lỏng ra và vướng vào lợi đau
                      ơi là đau. Và rồi em cứ thế bất giác chạm vào niềng răng
                      để không bị vướng vào lợi nữa".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo2021-08-1608-16-44-1629076822741415411674.jpg"
                      alt="1, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note="Câu chuyện đằng sau được chính chủ thú nhận..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo2021-08-1608-16-37-1629076822539816659261.jpg"
                      alt="2, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note="... là đang bị vướng niềng răng và phải chỉnh liên tục"
                    />
                    <p>
                      Với thú nhận quá đáng yêu của chính chủ, netizen đã cực kỳ
                      thích thú, nhiều người còn bày tỏ sự đồng cảm trước tình
                      thế khó xử này của <strong>Joy</strong>:
                    </p>
                    <p>
                      - Mình nhớ đợt <strong>MAMA</strong> này Mnet tung fancam{" "}
                      <strong>Joy</strong> hát theo bài của Wanna one mấy bình
                      luận ở dưới hỏi Joy có phải Miss Korea không? Công nhận
                      đẹp gái thật sự.
                    </p>
                    <p>
                      - Ôi mang niềng răng mà bị vướng thế đau lắm luôn, lại còn
                      phải mang trong thời gian dài nữa. Thương cô gái luôn tràn
                      đầy năng lượng của mình quá đi.
                    </p>
                    <p>
                      - Đẹp quá đi, dạo gần đây đang kiểu đỉnh cao nhan sắc,
                      thời điểm hiện tại thấy <strong>Joy</strong> định hướng
                      đúng phong cách rồi á, trừ cái bộ outfit của má stylist
                      đưa cho cô nàng lên show hát Hello ra thì lên Instagram
                      phong cách em này mê lắm á.
                    </p>
                    <p>
                      - <strong>Người đẹp</strong> thì làm gì cũng đẹp.
                    </p>
                    <p>
                      - Kiểu <strong>Red Velvet</strong> ai cũng làm visual được
                      ý xinh dã man.
                    </p>
                    <p>
                      - Xưa đã thấy <strong>Joy</strong> mà giảm cân đi xíu là
                      nhan sắc lên hương liền luôn.
                    </p>
                    <p>
                      - <strong>Người đẹp</strong> sờ cái niềng răng cũng thành
                      huyền thoại.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo2021-08-1608-17-10-1629076823651691702799.jpg"
                      alt="3, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note="Trong MAMA 2017, Joy thực sự là tâm điểm"
                    />
                    <RelationNewsInPage category={category} />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo2021-08-1608-17-12-16290768243941335815221.jpg"
                      alt="4, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note="Joy thực sự khiến người xem không thể rời mắt"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo2021-08-1608-17-22-16290768251572075553196.jpg"
                      alt="5, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note="Ngay cả khi ngồi xem..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo2021-08-1608-17-27-16290768259231598750006.jpg"
                      alt="6, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note="... đến khi trình diễn..."
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/red-velvet2-fdc8-16290813741581916942871.jpg"
                      alt="7, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note="Joy thật xinh đẹp khi xuất hiện trên ống kính trường quay"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/16/gifit1629080896592-16290810384372027688677.gif"
                      alt="8, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note="2017 quả là một năm khó quên đối với Red Velvet"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo2021-08-1608-16-52-16290768233691043931960.jpg"
                      alt="9, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note=""
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo2021-08-1608-17-01-1629076823609103778501.jpg"
                      alt="11, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/photo2021-08-1608-17-24-16290768253061775914086.jpg"
                      alt="12, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/16/gifit1629080942456-1629081038526148205951.gif"
                      alt="15, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/16/gifit1629080988201-16290810389011697559201.gif"
                      alt="16, red velvet,Joy (Red Velvet),Irene (Red Velvet),Red Velvet (SM),Joy,MAMA,Red Velvet comeback 2021,red velvet comeback,Red Velvet come back,Joy debut solo,joy red velvet,joy (red velvet) hát nhép,người đẹp,idol Kpop,Moment,viral,video viral,sexy,sao sexy,Cũ Rồi Đào Lại Cho Mới,"
                      note=""
                    />
                    <p>Nguồn: KB - Ảnh: TT - Clip: YT</p>
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
