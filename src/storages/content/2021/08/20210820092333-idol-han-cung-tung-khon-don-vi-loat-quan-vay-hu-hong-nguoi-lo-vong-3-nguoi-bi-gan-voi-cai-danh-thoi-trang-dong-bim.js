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
"timestamp": '20/08/2021 09:23 AM',
"title": 'Idol Hàn cũng từng khốn đốn vì loạt quần, váy "hư hỏng": Người lộ vòng 3, người bị gắn với cái danh "thời trang đóng bỉm"',
"description": 'Đây đều là những trang phục trình diễn khiến người xem cảm thấy khó chịu vì hở hang quá đà của idol Hàn.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/ezgifcom-resize-1629377308901604491586.gif',
"alt": 'Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,',
"category": 'stars',
"date": '20/08/2021',
"time": '09:23 AM',
"link": '/idol-han-cung-tung-khon-don-vi-loat-quan-vay-hu-hong-nguoi-lo-vong-3-nguoi-bi-gan-voi-cai-danh-thoi-trang-dong-bim',
"zcomponent": 'page_20210820092333',
"filepath": './20210820092333-idol-han-cung-tung-khon-don-vi-loat-quan-vay-hu-hong-nguoi-lo-vong-3-nguoi-bi-gan-voi-cai-danh-thoi-trang-dong-bim.js'
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
  'Idol Hàn cũng từng khốn đốn vì loạt quần, váy "hư hỏng": Người lộ vòng 3, người bị gắn với cái danh "thời trang đóng bỉm"';
const author = "ENCHANTIX WINX,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "20/08/2021 09:23 AM";
const description =
  "Đây đều là những trang phục trình diễn khiến người xem cảm thấy khó chịu vì hở hang quá đà của idol Hàn.";
const link =
  "idol-han-cung-tung-khon-don-vi-loat-quan-vay-hu-hong-nguoi-lo-vong-3-nguoi-bi-gan-voi-cai-danh-thoi-trang-dong-bim";
const tagparam = [
  "Kpop",
  "idol",
  "sao Hàn",
  "star style",
  "trang phục trình diễn",
  "phản cảm",
  "nhạy cảm",
  "váy ngắn",
  "quần ngắn",
  "quần bảo hộ",
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

export default function page_20210820092333() {
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
                      Đây đều là những <strong>trang phục trình diễn</strong>{" "}
                      khiến người xem cảm thấy khó chịu vì hở hang quá đà của{" "}
                      <strong>idol</strong> Hàn.
                    </p>
                    <p>
                      Đặc sản của <strong>idol</strong> nữ <strong>Kpop</strong>{" "}
                      chắc chắn là những <strong>trang phục trình diễn</strong>{" "}
                      ngắn đến đỏ mặt, thót tim. Vì để thỏa mãn tỉ lệ lưng ngắn
                      chân dài mà loạt idol nữ phải khoác lên người bộ váy hay
                      chân váy có chiều dài chỉ vừa qua vòng 3.{" "}
                      <strong>Quần bảo hộ</strong> thì bị lạm dụng quá mức,
                      nhiều lúc người ta còn tưởng đó là một cái quần cộc hẳn
                      hoi để mặc cùng "chiếc áo" có chiều dài dở dở ương ương.
                      Ngay cả bộ váy cầu vồng làm nên tên tuổi cho Joy cũng cực
                      kỳ ngắn, cứ đi vài bước là lộ hết quần bảo hộ ngay.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/ezgifcom-resize-1629377308901604491586.gif"
                      alt="1, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/dimpledconsideratejanenschiasizerestricted-1629377308897405382668.gif"
                      alt="2, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />

                    <p>
                      Nhiều khi bạn tưởng các nàng đang "act cool" trên sân
                      khấu, mặt lạnh lùng, thần thái dữ lắm nhưng thực ra lại là
                      khó chịu và căng thẳng vì nơm nớp sợ bị chụp lại khoảnh
                      khắc <strong>nhạy cảm</strong> nào đó. Khi được đưa một
                      chiếc váy bình thường với độ dài đâu đó từ đầu gối trở
                      xuống, làm gì thì làm, các stylist cứ xén bớt tới khi nào
                      chiếc váy trở thành một chiếc áo dài phủ mông, như cái áo
                      thời 2000 chúng ta hay mặc để phối cùng quần ôm ấy.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/mot-lan-nua-chiec-vay-cua-irene-tro-thanh-de-tai-khau-chien-tren-mang-32a7698c-16293773091051151897629.jpg"
                      alt="3, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/20171031-105809-3-6874-1495253290-1629377308622229818219.jpg"
                      alt="4, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/d4borosvuaex3zg-1629377406092535904504.jpg"
                      alt="5, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/nhung-lan-dien-short-ngan-nguong-chin-mat-cua-cac-nu-idol-han-84f1d3-1629377406427803730863.jpg"
                      alt="6, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/220c6125a03772e70986f5bd094fbb7e147d2e1e00-16293774058301673353046.jpg"
                      alt="7, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />

                    <p>
                      Cắt ngắn chưa đủ, stylist còn rất chuộng xẻ tà hai bên,
                      hoặc không thì để váy tự xẻ (chất liệu kém), và hậu quả
                      thì rõ mồn một rồi, vòng 3 của loạt <strong>idol</strong>{" "}
                      bị phô bày không thể rõ hơn trước cặp mắt soi mói của hàng
                      chục, hàng trăm, hàng ngàn người coi trực tiếp, rồi hàng
                      triệu người coi gián tiếp thông qua các video được ghi
                      lại. Một trong những nạn nhân nổi bật nhất chính là Nancy.
                      Vụt sáng sau bản hit Boom Boom, Nancy nhanh chóng trở
                      thành cây hút fan nhờ nhan sắc thiên thần lai và thân hình
                      đầy đặn, đặc biệt là vòng 3 nở nang gợi cảm.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/nancy-11-16293774062651492838589.jpg"
                      alt="8, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/nancy-04-16293774885381041347195.gif"
                      alt="9, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/vong-3-idol-kpop-2-1630-1629377489394215784734.jpeg"
                      alt="10, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/1573668650-89-529773124507179623346287381839224070237987n-1573555626-width660height825-1629377488191338295125.jpg"
                      alt="11, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/20180417112059-58b0-16293774882421711913703.gif"
                      alt="12, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/b5cb11d6553d95715004abeb8c5551d0-1629377488310339395558.gif"
                      alt="13, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <p>
                      Nancy thường xuyên bị stylist "dí" cho những chiếc váy và
                      quần short ngắn cũn cỡn, lắm lúc còn quên không cho cô mặc{" "}
                      <strong>quần bảo hộ</strong>, mà dù có cho cô nàng mặc thì
                      trang phục mặc ở ngoài cũng ngắn đến kệch cỡm. Không riêng
                      gì Nancy, các thành viên khác của MOMOLAND như Daisy hay
                      Yeonwoo cũng khó chịu thấy rõ khi phải diện đồ quá ngắn,
                      Yeonwoo phải liên tục lấy tay kéo quần. Váy quá ngắn, dù
                      có quần bảo hộ thì với góc quay từ dưới lên cũng khó tránh
                      đẩy <strong>idol</strong> vào tình huống{" "}
                      <strong>nhạy cảm</strong>.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/untitled-5-15239598925181783419456-1629377489271541947257.gif"
                      alt="14, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/996a76365f063a760e-1629377488092437396569.gif"
                      alt="15, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/m6-15239597615091724620230-16293774884521504217596.gif"
                      alt="16, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />

                    <p>
                      Tình trạng mặc đồ quá ngắn đã có từ gen 2, dù theo đuổi
                      hình tượng sexy nhưng outfit trình diễn quá khêu gợi của
                      Hyuna bị "tuýt còi" mạnh mẽ vì quá{" "}
                      <strong>phản cảm</strong>, đặc biệt là cô lại đang trình
                      diễn ở sự kiện công cộng, có rất nhiều đối tượng đến xem.
                      Trang phục ren của Seolhyun và Hyomin bị cho là quá khêu
                      gợi, hay Ha Young (Apink) cũng bị netizen than phiền vì
                      chiếc váy của cô quá ngắn, chỉ một cái xoay người nhẹ là
                      đã thấy hết bên trong.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/dtfdew4aimd7g-1629377879711699197175.jpg"
                      alt="20, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <p>
                      Không chỉ nhận về hàng tá lời chỉ trích, các{" "}
                      <strong>idol</strong> khi mặc đồ quá ngắn cũng trở thành
                      "tầm ngắm" cho những lời nói và hành động quấy rối tình
                      dục. Bản thân các cô gái khi diện những trang phục hở hang
                      cũng không thoải mái, ảnh hưởng đến phần trình diễn để rồi
                      bị chê trách oan uổng. Có lẽ khi nào chúng ta thôi kỳ vọng
                      về một hình mẫu idol có vóc dáng đẹp hơn cả nữ thần thì
                      chừng đó những outfit ngắn đến kệch cỡm này mới dần biến
                      mất.
                    </p>
                    <p></p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/a7-1629379214651487149662.gif"
                      alt="17, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/a5-16293792145902143316535.gif"
                      alt="18, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/bf76cd973d01419199511c5e77912035d40978b700-16293778796521496826581.jpg"
                      alt="19, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/unnamed-2-1629377880622907075271.jpg"
                      alt="21, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/a5-1629377892915874337047.jpg"
                      alt="22, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/item99798640px3f3d9fcf5a1d4aeb83ec84f42db08811-1629377880089413921753.jpeg"
                      alt="23, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/trang-phuc-dien-sexy-cua-sao-han--1629377893167326623333.jpg"
                      alt="24, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/img0281-16293778799671684793890.jpg"
                      alt="25, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/unnamed-1629377880631734097471.jpg"
                      alt="26, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/a2-1629377893030294325550.jpg"
                      alt="27, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/item541691280pxc30271d083f541e5943199e08a4ec9d6-16293778799721481964498.jpeg"
                      alt="28, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/kpop-16293778933171224719950.jpg"
                      alt="29, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/19/sojin-2016-1504433736-16293778802521568354199.jpg"
                      alt="30, Kpop,idol,sao Hàn,star style,trang phục trình diễn,phản cảm,nhạy cảm,váy ngắn,quần ngắn,quần bảo hộ,"
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
