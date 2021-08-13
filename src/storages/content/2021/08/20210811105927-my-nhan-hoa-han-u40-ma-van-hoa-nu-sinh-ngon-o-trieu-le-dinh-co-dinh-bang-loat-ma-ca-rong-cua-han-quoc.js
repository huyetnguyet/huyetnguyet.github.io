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
"timestamp": '11/08/2021 10:59 AM',
"title": 'Mỹ nhân Hoa - Hàn U40 mà vẫn hóa nữ sinh ngon ơ: Triệu Lệ Dĩnh có đỉnh bằng loạt "ma cà rồng" của Hàn Quốc?',
"description": 'Bạn thích tạo hình nữ sinh của mỹ nhân nào nhất?',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/22490033944008436167005745741514556988718863n-1628643044228495697507.jpg',
"alt": 'nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,',
"category": 'stars',
"date": '11/08/2021',
"time": '10:59 AM',
"link": '/my-nhan-hoa-han-u40-ma-van-hoa-nu-sinh-ngon-o-trieu-le-dinh-co-dinh-bang-loat-ma-ca-rong-cua-han-quoc',
"zcomponent": 'page_20210811105927',
"filepath": './20210811105927-my-nhan-hoa-han-u40-ma-van-hoa-nu-sinh-ngon-o-trieu-le-dinh-co-dinh-bang-loat-ma-ca-rong-cua-han-quoc.js'
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
  'Mỹ nhân Hoa - Hàn U40 mà vẫn hóa nữ sinh ngon ơ: Triệu Lệ Dĩnh có đỉnh bằng loạt "ma cà rồng" của Hàn Quốc?';
const author = "PHOEBE,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "11/08/2021 10:59 AM";
const description = "Bạn thích tạo hình nữ sinh của mỹ nhân nào nhất?";
const link =
  "my-nhan-hoa-han-u40-ma-van-hoa-nu-sinh-ngon-o-trieu-le-dinh-co-dinh-bang-loat-ma-ca-rong-cua-han-quoc";
const tagparam = [
  "nữ sinh",
  "sao Hoa ngữ",
  "sao Trung",
  "sao Hàn",
  "Cbiz",
  "Kbiz",
  "triệu lệ dĩnh",
  "jang nara",
  "park bo young",
  "star style",
  "làm đẹp",
  "Makeup",
  "tạo hình trong phim",
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

export default function page_20210811105927() {
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
                      Dù thế nào đi chăng nữa, sự trẻ trung và xinh đẹp luôn là
                      yếu tố ảnh hưởng rất lớn đến những ngôi sao hoạt động
                      trong giới giải trí. Hóa thân vào vai{" "}
                      <strong>nữ sinh</strong>, loạt sao nữ Hoa - Hàn dưới đây
                      chứng minh nhan sắc không tuổi đáng gờm của mình dù nàng
                      nào cũng đã ngấp nghé 30 hay 40. Điểm chung là các cô nàng
                      đều có gương mặt tròn với phần má bầu bĩnh, nên đã trẻ lại
                      càng thêm trẻ. Cùng điểm qua một số mỹ nhân thành công với
                      vai diễn này nhé!
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/22490033944008436167005745741514556988718863n-1628643044228495697507.jpg"
                      alt="1, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/23319664544008679266981432425250077742481556n-16286430442701519316843.jpg"
                      alt="2, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/22161469544008433167006043025914497183669657n-16286430440301761004796.jpg"
                      alt="3, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <p>
                      Nếu mới lần đầu biết <strong>Triệu Lệ Dĩnh</strong>, dễ có
                      khi bạn tưởng nữ diễn viên là một tân binh mới chớm đôi
                      mươi chập chững gia nhập làng giải trí. Thực ra năm nay
                      Triệu Lệ Dĩnh đã 35 tuổi rồi, nhưng điều này chẳng cản trở
                      cô hóa thân thành <strong>nữ sinh</strong> cực nuột trong
                      dự án âm nhạc mang tên Xứng Đáng Với Điều Tốt Hơn.
                    </p>
                    <p>
                      Gương mặt tròn khả ái nay trông lại càng nhỏ nhắn, đáng
                      yêu hơn nhờ được stylist khéo tạo độ phồng cho mái tóc đen
                      nhánh, xõa tự nhiên. Tông trang điểm cam nhạt trong trẻo
                      lại càng giúp "mẹ bỉm sữa" trẻ trung hơn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/jang-nara-jang-hyuk-dien-dong-phuc-nhai-lai-phim-cu-1-1628643045101845025225.jpg"
                      alt="4, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/jang-nara-jang-hyuk-dien-dong-phuc-nhai-lai-phim-cu-3-162864304512347566673.jpg"
                      alt="5, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/jang-nara-jang-hyuk-dien-dong-phuc-nhai-lai-phim-cu-0a1dac-1628643045031377679344.jpg"
                      alt="6, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <p>
                      "Ma cà rồng" của Hàn Quốc - <strong>Jang Nara</strong>{" "}
                      cũng chứng minh khả năng nhập vai <strong>nữ sinh</strong>{" "}
                      xuất sắc khi đã 33 tuổi. Những hình ảnh nhí nhảnh, đáng
                      yêu của nữ diễn viên trong bộ phim Định Mệnh Anh Yêu Em
                      phiên bản Hàn khiến nhiều người thắc mắc làm sao cô có thể
                      giữ được nhan sắc trẻ trung lâu đến thế. Diện bộ đồng phục
                      với áo sơ mi cột nơ, áo gile, chân váy xếp ly, thắt tóc
                      hai bên và đeo kính Nobita, nhìn Jang Nara không khác gì
                      nhiều so với nữ sinh cấp 3 thực sự cả.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/18458629821914926843268394736373712072460791n-16217456707431743649736-16286430444582064269384.jpg"
                      alt="7, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/base64-1628643296969779569724.png"
                      alt="8, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/base64-162864327432669012356.png"
                      alt="9, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <p>
                      Chẳng phải khi không <strong>Park Bo Young</strong> lại
                      được dân Hàn ưu ái gọi là "em gái quốc dân" đâu. Biến đôi
                      mắt mí lót biết nói thành lợi thế, Park Bo Young liên tục
                      để lại nhiều dấu ấn ấn tượng trong lòng người hâm mộ, chỉ
                      cần cô làm nũng một chút thôi thì dù là người khó tính
                      nhất cũng sẽ tan chảy ngay.
                    </p>
                    <p>
                      Đặc biệt khi cô nàng cắt mái thì diện mạo lại càng trẻ hơn
                      bội phần. Đó là lý do <strong>Park Bo Young</strong> vẫn
                      vào vai <strong>nữ sinh</strong> rất ngọt dù đã tròn 28
                      khi đóng Ngày Em Đẹp Nhất hay 32 tuổi trong Doom At Your
                      Service.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/base64-1628677329581278392964.png"
                      alt="10, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/base64-16286773130421107601274.png"
                      alt="11, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/1621449086-image-1621476187833900238334-16286772100361807613438.png"
                      alt="12, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />

                    <p>
                      Vào vai <strong>nữ sinh</strong> cấp 3 khi đã 33 tuổi,
                      Park Min Young lần nữa khiến khán giả choáng váng với vẻ
                      ngoài trẻ trung, bất chấp thời gian trong bộ phim Đời Tư
                      Của Nàng. Dù sở hữu chiều cao 1m64 khá ổn áp với mặt bằng
                      chung, nhưng khi sánh đôi cạnh bạn diễn nam, Park Min
                      Young bỗng trở nên nhỏ nhắn, càng tạo cảm giác như học
                      sinh thật sự.
                    </p>
                    <p>
                      Tạo hình của cô cũng khá đơn giản với bộ đồng phục màu
                      xanh navy mix cùng xanh lá đậm, khoác thêm áo măng tô màu
                      nâu bên ngoài. Nữ diễn viên cũng trang điểm nhẹ nhàng, son
                      môi hồng nhạt, tóc xõa dài, kẹp thêm chiếc kẹp tăm nhỏ cho
                      thêm phần chân phương.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/a1-1505437755672-16286430445101046805257.jpg"
                      alt="13, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/base64-16286434372131645597182.png"
                      alt="14, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/base64-16286434372131645597182.png"
                      alt="15, nữ sinh,sao Hoa ngữ,sao Trung,sao Hàn,Cbiz,Kbiz,triệu lệ dĩnh,jang nara,park bo young,star style,làm đẹp,Makeup,tạo hình trong phim,"
                      note=""
                    />

                    <p>
                      Tuy không quá nổi tiếng nhưng Oh Ji Eun lại gây được nhiều
                      chú ý nhờ màn hóa thân thành <strong>nữ sinh</strong> cấp
                      3 cực mượt trong Unknown Woman dù đã 36 tuổi. Nữ diễn viên
                      cột tóc cao, để mái ngang mỏng, diện đồng phục màu đỏ đô
                      chuẩn nữ sinh Hàn và son môi màu hồng nhẹ nhàng. Cô nàng
                      được nhận xét có vẻ đẹp đậm chất Hàn Quốc và gây thiện cảm
                      với nụ cười tươi tắn, đáng yêu.
                    </p>
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
