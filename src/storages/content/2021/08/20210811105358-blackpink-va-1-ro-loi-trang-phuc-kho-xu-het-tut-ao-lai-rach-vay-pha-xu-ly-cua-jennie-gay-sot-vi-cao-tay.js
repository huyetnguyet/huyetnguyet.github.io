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
"timestamp": '11/08/2021 10:53 AM',
"title": 'BLACKPINK và 1 "rổ" lỗi trang phục khó xử: Hết tụt áo lại rách váy, pha xử lý của Jennie gây sốt vì cao tay!',
"description": 'Không biết lỗi do stylist hay vì vận xui mà BLACKPINK đã 5 lần 10 lượt vướng sự cố trang phục bi hài tới vậy.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/1-171640-1628651713299474880525.png',
"alt": 'Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,',
"category": 'stars',
"date": '11/08/2021',
"time": '10:53 AM',
"link": '/blackpink-va-1-ro-loi-trang-phuc-kho-xu-het-tut-ao-lai-rach-vay-pha-xu-ly-cua-jennie-gay-sot-vi-cao-tay',
"zcomponent": 'page_20210811105358',
"filepath": './20210811105358-blackpink-va-1-ro-loi-trang-phuc-kho-xu-het-tut-ao-lai-rach-vay-pha-xu-ly-cua-jennie-gay-sot-vi-cao-tay.js'
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
  'BLACKPINK và 1 "rổ" lỗi trang phục khó xử: Hết tụt áo lại rách váy, pha xử lý của Jennie gây sốt vì cao tay!';
const author = "LÝ THẨM,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "11/08/2021 10:53 AM";
const description =
  "Không biết lỗi do stylist hay vì vận xui mà BLACKPINK đã 5 lần 10 lượt vướng sự cố trang phục bi hài tới vậy.";
const link =
  "blackpink-va-1-ro-loi-trang-phuc-kho-xu-het-tut-ao-lai-rach-vay-pha-xu-ly-cua-jennie-gay-sot-vi-cao-tay";
const tagparam = [
  "Blackpink",
  "sự cố trang phuc",
  "sao đỏ thời trang",
  "rách váy",
  "tụt quần",
  "idol Kpop",
  "sao Hàn",
  "star style",
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

export default function page_20210811105358() {
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
                      Chẳng có ai idol nào lên sân khấu mà muốn gặp sự cố, nhất
                      là sự cố trang phục oái oăm. Ai cũng muốn lên để cháy hết
                      mình rồi bước xuống mà bình an vô sự, ung dung tự tại mà
                      không lâm phải tình cả "ối dồi ôi" vì tấm áo manh quần.
                    </p>
                    <p>
                      <strong>BLACKPINK</strong> cũng là 1 trong số đó, cũng
                      muốn được suôn sẻ khi lên sân khấu nhưng cuộc đời thì
                      không muốn vậy. Tính ra số lần các nàng "sấp mặt" vì lỗi
                      trang phục cũng chẳng ít, lần này thì được dân tình khen
                      xử lý tinh tế, lần kia thì bị chê là lóng ngóng nom đến là
                      thiếu tinh tế. Thôi thì chung quy toàn mấy cô trẻ người
                      non dạ, từ từ rồi sẽ chuyên nghiệp hơn!
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/jisoo-wm-3-15802686117571627165016-1628650667838589012105.jpeg"
                      alt="1, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note="Năm 2017, chiếc thắt lưng dài thượt đột nhiên tuột khỏi áo và quăng quật lung tung nhưng Rosé vẫn bình tĩnh xử lý dù chỉ là 1 idol còn khá mới"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/jisoo-wm-1-1580268611766148801183-1628646471329208157107.jpeg"
                      alt="2, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note="Rosé làm rơi bông tai xuống sàn diễn..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-1543827583306233085517-16286475552971636395485.jpeg"
                      alt="3, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note="... và cô nhanh chân sút mạnh để tránh gây tai nạn cho chính mình và các thành viên khác nếu vô tình giẫm phải"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/rose-wm1-15802676705952059852798-crop-15802687562451644225171-16286475553121555913946.gif"
                      alt="4, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note="Chiếc nhẫn vướng víu móc vào áo của Rosé..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/2107840315337443166852557614772482038899066n-15356240693601250390992-1585238611603156836521-1628653666580251327181.jpeg"
                      alt="5, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note="... cô thẳng tay vứt luôn không cần nghĩ nhiều"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/dien-do-hieu-chuc-trieu-nhung-blackpink-van-bi-su-co-trang-phuc-f83a1201-16286501917281824070670.jpeg"
                      alt="6, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note="Điều tương tự cũng xảy ra với chiếc vòng tay rắc rối"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-1-1628645468209236519832.jpg"
                      alt="7, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note="Mẫu crop top cài khuy thích chặt vòng 1 khiến hàng cúc áo bỗng hoá mong manh..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/bp-my-2-16286497569761544875552.jpg"
                      alt="8, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note="Quá nhanh, quá nguy hiểm!"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/bp-my-3-16286497572071753791718.jpg"
                      alt="9, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note="Jennie lóng ngóng xử lý sự cố"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-1563123963644820556160-16286514027991539787702.jpeg"
                      alt="10, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note="Và để chị em mình ở lại..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-15631239819731087643781-1628651402825423682443.jpeg"
                      alt="11, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note="Trang phục của Lisa trước lúc biểu diễn..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/11/a5-15852386116361534895417-1628653666841625062913.gif"
                      alt="13, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note="Và không chỉ có Lisa, Jisoo cũng gặp trường hợp tương tự"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/11/a6-158523861164225040767-16286536669251233476023.gif"
                      alt="15, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/11/a1-1585238611609730939027-16286536667821506948495.gif"
                      alt="16, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/11/a2-1585238611612460606078-16286536668051527176812.gif"
                      alt="17, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/11/a4-1585238611622283438188-16286536668241383916146.gif"
                      alt="18, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/11/j1-1529553309324173000924-16286512227031925709551.gif"
                      alt="19, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/11/thumb4022052902766804-1628648357474787816970.gif"
                      alt="20, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/11/bp-my-5-2-162864975734372672009.gif"
                      alt="21, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/11/bp-my-4-2-1628649757267790102315.gif"
                      alt="22, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/11/animation-1563124756094227740764-16286512223931658511584.gif"
                      alt="23, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/11/animation-1-1563124756089570505312-16286512226652111131783.gif"
                      alt="24, Blackpink,sự cố trang phuc,sao đỏ thời trang,rách váy,tụt quần,idol Kpop,sao Hàn,star style,"
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
