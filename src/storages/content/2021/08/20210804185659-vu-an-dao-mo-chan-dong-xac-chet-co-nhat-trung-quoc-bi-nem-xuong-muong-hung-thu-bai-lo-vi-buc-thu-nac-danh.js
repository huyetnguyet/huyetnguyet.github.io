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
"timestamp": '04/08/2021 06:56 PM',
"title": 'Vụ án đào mộ chấn động: Xác chết cổ nhất Trung Quốc bị ném xuống mương, hung thủ bại lộ vì bức thư nặc danh!',
"description": 'Tháng 5/1994, thi hài cổ nhất Trung Quốc được phát hiện ở thành phố Kinh Môn, tỉnh Hồ Bắc. Đây là thi hài người phụ nữ sống cách đây gần 2.400 năm được bảo tồn hoàn chỉnh nhất về ngoại hình và xương cốt.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-6-1628067552764355170762.jpg',
"alt": 'tỉnh Hồ Bắc,người phụ nữ,quy mô lớn,cảnh sát trưởng,cỗ quan tài,tầng lớp quý tộc,Lịch sử đất nước,Thời Chiến Quốc,đào trộm mộ,thi thể phụ nữ,cao chạy xa bay,',
"category": 'news',
"date": '04/08/2021',
"time": '06:56 PM',
"link": '/vu-an-dao-mo-chan-dong-xac-chet-co-nhat-trung-quoc-bi-nem-xuong-muong-hung-thu-bai-lo-vi-buc-thu-nac-danh',
"zcomponent": 'page_20210804185659',
"filepath": './20210804185659-vu-an-dao-mo-chan-dong-xac-chet-co-nhat-trung-quoc-bi-nem-xuong-muong-hung-thu-bai-lo-vi-buc-thu-nac-danh.js'
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
  "Vụ án đào mộ chấn động: Xác chết cổ nhất Trung Quốc bị ném xuống mương, hung thủ bại lộ vì bức thư nặc danh!";
const author = "DIỆU THÚY,";
const source = "Trí Thức Trẻ";
const timestamp = "04/08/2021 06:56 PM";
const description =
  "Tháng 5/1994, thi hài cổ nhất Trung Quốc được phát hiện ở thành phố Kinh Môn, tỉnh Hồ Bắc. Đây là thi hài người phụ nữ sống cách đây gần 2.400 năm được bảo tồn hoàn chỉnh nhất về ngoại hình và xương cốt.";
const link =
  "vu-an-dao-mo-chan-dong-xac-chet-co-nhat-trung-quoc-bi-nem-xuong-muong-hung-thu-bai-lo-vi-buc-thu-nac-danh";
const tagparam = [
  "tỉnh Hồ Bắc",
  "người phụ nữ",
  "quy mô lớn",
  "cảnh sát trưởng",
  "cỗ quan tài",
  "tầng lớp quý tộc",
  "Lịch sử đất nước",
  "Thời Chiến Quốc",
  "đào trộm mộ",
  "thi thể phụ nữ",
  "cao chạy xa bay",
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

export default function page_20210804185659() {
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
                    <h5>Thi thể cổ nhất Trung Hoa</h5>
                    <p>
                      Tháng 3 năm 1994, cả Trung Quốc chấn động bởi vụ việc một
                      người dân thôn Quách Điếm phát hiện một thi hài cổ nằm
                      "trần trụi" dưới con mương đầy bùn đất bên ngoài khu mộ có
                      tên là "Quách Gia Cương số 1". Do ở hiện trường có rất
                      nhiều dấu tích đào xới, rất nhanh, đội chuyên án đã xác
                      định đây là một vụ trộm mộ có <strong>quy mô lớn</strong>{" "}
                      với tính chất man rợ.
                    </p>
                    <p>
                      Bước đầu xác định, thi thể này đã bị những kẻ trộm mộ đào
                      lên rồi kéo lôi và nằm dưới mương khoảng 39 ngày, khiến
                      cho cái xác hàng nghìn năm tuổi hoàn toàn không thể nhận
                      dạng được. Nếu không phải nhân viên vụ án nhanh chóng xử
                      lý, có lẽ thi hài cổ đại này sẽ biến thành bùn đất.
                    </p>
                    <p>
                      Bọn mộ tặc thậm chí còn có những hành động hủy hoại thi
                      hài một cách tàn nhẫn như nhổ tóc, xé hết lụa là quần áo
                      rồi buộc dây vào cổ kéo thi thể trên đất sau đó vùi thi
                      thể xuống vũng bùn khiến cho ai ở hiện trường cũng cảm
                      thấy ghê rợn và căm phẫn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-1-16280675514921707796799.jpg"
                      alt="1, tỉnh Hồ Bắc,người phụ nữ,quy mô lớn,cảnh sát trưởng,cỗ quan tài,tầng lớp quý tộc,Lịch sử đất nước,Thời Chiến Quốc,đào trộm mộ,thi thể phụ nữ,cao chạy xa bay,"
                      note="Thi hài cổ được tìm thấy khi trục vớt mương (Hình ảnh: Sohu)"
                    />
                    <p>
                      Ngoài thi hài nữ này, <strong>cảnh sát trưởng</strong>{" "}
                      Vương Hải Lâm còn phát hiện ra một hố lớn có đường kính
                      khoảng 1,5 mét đã được đào trong ngôi mộ cổ, xung quanh
                      lối vào là những mảng đất sét loang lổ và những mảnh vụn
                      quan tài sơn mài đen.
                    </p>
                    <p>
                      Sau khi điều tra, họ phát hiện đường hầm có độ sâu hơn 5
                      mét chạm tới khoang đầu của mộ thất. Xung quanh tường mộ
                      thất bị cạy tung. Mộ thất rộng hơn 10 mét vuông và cao hơn
                      2 mét, ở giữa có một <strong>cỗ quan tài</strong> rất to,
                      dày 7 đến 8 tấc bị khoét một lỗ có đường kính khoảng 1
                      mét. Đây chắc chắn là mộ của{" "}
                      <strong>tầng lớp quý tộc</strong>.
                    </p>
                    <p>
                      Ngoài thi hài cổ này cảnh sát còn thu hồi được hơn 20 văn
                      vật quý hiếm như sách làm từ thẻ tre, tơ lụa, trang sức...
                      Tất cả đều có giá trị rất lớn đối với{" "}
                      <strong>lịch sử đất nước</strong> tỷ dân bởi những tài
                      liệu ghi chép về <strong>thời Chiến Quốc</strong> vốn dĩ
                      đã rất ít ỏi.
                    </p>
                    <h5>Lời khai của bọn mộ tặc</h5>
                    <p>
                      Bước đầu ban chuyên án khẳng định vụ án này có liên quan
                      đến nhiều người dân trong thôn Quách Điếm nên đã đến từng
                      hộ dò hỏi tình hình và vận động mọi người cung cấp manh
                      mối cho cảnh sát. Hai ngày sau, một bức thư nặc danh báo
                      rằng Lý Thế Bưu, một cán bộ thôn đã ngấm ngầm cấu kết với
                      bọn mộ tặc để kiếm lợi từ việc{" "}
                      <strong>đào trộm mộ</strong> lấy cổ vật.
                    </p>
                    <p>
                      Chỉ trong 5 ngày đã có 9 bức thư được gửi đến, một điều
                      làm chấn động là có bức thư tố cáo rằng "Bọn{" "}
                      <strong>đào trộm mộ</strong> có hơn chục người, trong đó
                      có Lý Nghi Hải và Quách Hiếu Bình cầm đầu, Lý Hoa, Lý
                      Tân... Bọn chúng đã vào trong một ngôi mộ có một{" "}
                      <strong>thi thể phụ nữ</strong> vẫn như đang nằm ngủ và
                      lấy đi rất nhiều cổ vật giá trị không thể tính được".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-3-16280675541601946117155.jpg"
                      alt="2, tỉnh Hồ Bắc,người phụ nữ,quy mô lớn,cảnh sát trưởng,cỗ quan tài,tầng lớp quý tộc,Lịch sử đất nước,Thời Chiến Quốc,đào trộm mộ,thi thể phụ nữ,cao chạy xa bay,"
                      note="Tên cầm đầu vụ trộm mộ Lý Nghi Hải bị bắt năm 2017 (Hình ảnh: Baidu)"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Mấy ngày sau đã có 3 người là thôn dân tham gia vào vụ
                      "ngôi mộ Quách Gia Cương số 1" ra đầu thú và mang nộp 14
                      cổ vật đã lấy ở trong mộ. Quách Hiếu Bình, Lý Tân, Lý Hoa
                      lập tức bị công an bắt giữ, riêng tên đầu sỏ Lý Nghi Hải
                      đã <strong>cao chạy xa bay</strong> để trốn tội.
                    </p>
                    <p>
                      Theo như đám mộ tặc kể lại, bọn chúng đã lần vào hầm mộ
                      này 2 lần. Lần đầu lấy được hơn 10 thứ gồm tượng gỗ, một
                      bộ nhạc khí Sở Quốc, gương đồng và các hộp bằng tre. Lần
                      thứ hai quay lại bọn chúng quyết định mở nắp quan tài vì
                      nghĩ rằng người xưa hay cất giấu vàng bạc châu báu trong
                      thi hài nên đã buộc dây thừng vào cổ thi hài và kéo ra
                      khỏi hầm mộ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-4-1628067553655303460468.jpg"
                      alt="3, tỉnh Hồ Bắc,người phụ nữ,quy mô lớn,cảnh sát trưởng,cỗ quan tài,tầng lớp quý tộc,Lịch sử đất nước,Thời Chiến Quốc,đào trộm mộ,thi thể phụ nữ,cao chạy xa bay,"
                      note="Các chuyên gia thẩm định thi hài cổ nhất Trung Quốc (Hình ảnh: Zhihu)"
                    />
                    <p>
                      Bọn chúng xem xét khắp người thi hài cổ nhưng cũng không
                      có gì. Tên Lý Nghi Hải thấy lớp vải lụa quấn quanh thi thể
                      rất đẹp, hắn nghĩ là vải này cũng có giá nên bọn chúng lột
                      lấy cho vào bao tải. Xong việc bọn chúng cầm dây thừng
                      buộc ở cổ kéo thi hài qua mấy thửa ruộng và cỏ dại đến chỗ
                      cách mộ cũ khoảng hơn 30m rồi vùi xuống một cái mương đầy
                      bùn đất.
                    </p>
                    <p>
                      Với sự tàn nhẫn như vậy, bọn mộ tặc đáng phải chịu hình
                      phạt nặng nhất trước pháp luật. Thế nhưng mãi cho đến tận
                      năm 2017, tức là 23 năm sau, tên đầu sỏ Lý Nghi Hải mới bị
                      bắt và chịu án tử hình.
                    </p>
                    <h5>Điều kỳ lạ trên thi hài hơn 2400 tuổi</h5>
                    <p>
                      Khi Ủy ban di sản Trung Quốc gồm 26 vị chuyên gia tiến
                      hành giám định thì ai nấy đều kinh hãi khi phát hiện da
                      của xác chết cổ này thực sự vẫn còn tính đàn hồi, ước
                      chừng <strong>người phụ nữ</strong> cao 1,62m và được bảo
                      tồn từ <strong>thời Chiến Quốc</strong> cách đây đã 2400
                      năm.
                    </p>
                    <p>
                      Mặc dù bị di chuyển và cất giấu trong 39 ngày nhưng thi
                      thể không hề bị thối rữa, các chi vẫn có thể uốn cong, đã
                      chuyển sang màu đen và đầy ắp những vết sẹo. Da ở hông,
                      bắp chân, bàn tay phải và gót chân bị tổn thương nghiêm
                      trọng, khớp háng và xương cổ đã bị đứt rời. Sợi dây thừng
                      vẫn buộc vào cổ, dưới sợi dây còn có một vết sẹo sâu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/4/photo-6-1628067552764355170762.jpg"
                      alt="4, tỉnh Hồ Bắc,người phụ nữ,quy mô lớn,cảnh sát trưởng,cỗ quan tài,tầng lớp quý tộc,Lịch sử đất nước,Thời Chiến Quốc,đào trộm mộ,thi thể phụ nữ,cao chạy xa bay,"
                      note="Thi hài người phụ nữ từ thời Chiến Quốc hiện vẫn đang được bảo tồn tại bảo tàng thành phố Kinh Môn (Hình ảnh: jjcnc)"
                    />
                    <p>
                      Tính đến giờ, đây là thi thể cổ nhất Trung Quốc được phát
                      hiện trong hình dạng hoàn chỉnh nhất và có thể coi là một
                      bảo vật quốc gia quý hiếm, có giá trị nghiên cứu lịch sử,
                      khoa học và nghệ thuật vô cùng cao. Thậm chí nếu không bị
                      bọn mộ tặc đối xử tàn nhẫn thì vẫn sẽ giữ được da dẻ tươi
                      sáng, mềm mại.
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
