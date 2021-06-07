import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 06/06/2021 07:43 PM",
"title": Cảnh nóng bị nghi thật 100% làm Thang Duy bị 'phong sát': Vợ chồng Lương Triều Vỹ lục đục, nữ chính có chia sẻ gây sốc",
"description": Cho đến hiện tại, cảnh nóng của Thang Duy và Lương Triều Vỹ trong Sắc, Giới vẫn khiến khán giả tranh cãi.",
"src": ",
"alt": Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, ",
"category": news",
"date": 06/06/2021",
"time": 07:43 PM",
"link": "/canh-nong-bi-nghi-that-100-lam-thang-duy-bi-phong-sat-vo-chong-luong-trieu-vy-luc-duc-nu-chinh-co-chia-se-gay-soc",
"zcomponent": page_20210606074311",
"filepath": ./20210606074311-canh-nong-bi-nghi-that-100-lam-thang-duy-bi-phong-sat-vo-chong-luong-trieu-vy-luc-duc-nu-chinh-co-chia-se-gay-soc.js"
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
  "Cảnh nóng bị nghi thật 100% làm Thang Duy bị 'phong sát': Vợ chồng Lương Triều Vỹ lục đục, nữ chính có chia sẻ gây sốc";
const author = "THÀNH VŨ,";
const source = "Trí Thức Trẻ";
const timestamp = "06/06/2021 07:43 PM";
const description =
  "Cho đến hiện tại, cảnh nóng của Thang Duy và Lương Triều Vỹ trong Sắc, Giới vẫn khiến khán giả tranh cãi.";
const link =
  "canh-nong-bi-nghi-that-100-lam-thang-duy-bi-phong-sat-vo-chong-luong-trieu-vy-luc-duc-nu-chinh-co-chia-se-gay-soc";
const tagparam = [
  "sac-gioi",
  "sac-gioi",
  "sac-gioi-2008",
  "luong-trieu-vy",
  "thang-duy",
  "luu-gia-linh",
  "ly-an",
  "canh-nong",
  "canh-18",
  "phim-hoa-ngu",
  "kim-ma",
  "phim-trung-quoc",
  "phim-dien-anh",
  "phim-chieu-rap",
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

export default function page_20210606074311() {
  return (
    <>
      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              >
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Dù đã gần 15 năm trôi qua nhưng dự án phim nghệ thuật Sắc,
                    Giới của đạo diễn Lý An cho đến nay vẫn tồn tại nhiều tranh
                    cãi. Không phải vì chủ đề đậm màu chiến tranh, cũng chẳng
                    phải vì chất lượng sản xuất hay diễn xuất, mà tranh cãi bắt
                    nguồn từ cảnh nóng 18+ của cặp đôi chính Lương Triều Vỹ -
                    <strong>Thang Duy</strong>.
                  </p>

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/lust-caution-547b68e25e0a628-07-202004g33-13-1622995935799375128902.jpg"
                    alt="Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, "
                    note="Sắc, Giới là một trong những phim gây tranh cãi nhất Trung Quốc"
                  />
                  <p>
                    Cảnh phim lúc bấy giờ khiến làng phim bùng nổ vì quá táo
                    bạo, thậm chí khiến<strong>Thang Duy</strong> bị "cấm vận"
                    suốt 3 năm trời. Nhiều câu hỏi đã được đặt ra, như liệu cảnh
                    nóng của Sắc, Giới có phải là thật 100%, và các diễn viên
                    tham gia có phản ứng gì về phân đoạn quá sức nhạy cảm này.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/686b040bda954c5887e05d0c8bc00c69-1622993330685427516793.jpeg"
                    alt="Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/203336854389633024/2021/6/6/436s0002rp1n4184rp9r-16229934074221512497485.gif"
                    alt="Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/203336854389633024/2021/6/6/886440566e3c3bcda6acb367b3b35ed5e19f083e-1622993824325177463856.gif"
                    alt="Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/203336854389633024/2021/6/6/e6afe2ab8539d81819a516b9843ad259-1622993824354335286251.gif"
                    alt="Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, "
                    note="Cảnh nóng trong Sắc, Giới táo bạo đến mức nhiều người cho là thật"
                  />
                  <p>
                    Vì có những màn tiếp xúc da thịt quá trần trụi và mãnh liệt,
                    thậm chí<strong>Thang Duy</strong> còn gần như phơi bày toàn
                    bộ cơ thể trên màn ảnh, Sắc, Giới bị khán giả nghi ngờ theo
                    hai luồng quan điểm khác nhau. Ai nấy dành ra hàng tá thì
                    giờ để săm soi, phân tích các cảnh 18+ trong phim (vốn đã
                    được đạo diễn Lý An cắt xén đáng kể), và cho rằng có thể cả
                    hai đã dùng đóng thế, hoặc họ đã... "ân ái" với nhau thật.
                    Thế nhưng so với luận điểm đầu thì khả năng "người thật việc
                    thật" lại lan truyền mạnh mẽ hơn.
                  </p>
                  <p>
                    Trước đó Lý An từng nhận xét<strong>Thang Duy</strong> đã
                    "hi sinh quá nhiều" cho bộ phim này. Với một sản phẩm đầu
                    tay, những gì mà Thang Duy thực hiện ở Sắc, Giới là vô cùng
                    mạo hiểm. Lý An cho biết ngay khi cảnh quay kết thúc, ông
                    bắt buộc hai diễn viên phải "thoát vai" ngay lập tức để ngăn
                    chặn sự cuồng nhiệt có thể có. Đôi lúc cả hai đã không tránh
                    khỏi "quá khích" dù phân đoạn đã hoàn thành, theo như lời Lý
                    An tiết lộ. Vì lẽ đó, nhiều khán giả không khỏi hoài nghi
                    cảnh nóng này là thật 100%. Tuy nhiên cặp diễn viên đã có
                    những chia sẻ chính thức về vấn đề này.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/f8e8bc0a0adb5305a2ed98367e403f76-1622995824859125292170.jpg"
                    alt="Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, "
                    note="Lương Triều Vỹ rất đầu tư cho cảnh nóng trong Sắc, Giới"
                  />
                  <p>
                    Trong quá khứ, Lương Triều Vỹ từng tỏ ra hối hận khi không
                    đầu tư nghiêm túc cho cảnh nóng trong Xuân Quang Xạ Tiết, vì
                    thế có thể suy luận với Sắc, Giới, nam diễn viên đã rất
                    nhiệt tình với cảnh cùng<strong>Thang Duy</strong>. Kết quả,
                    cảnh nóng này còn khiến vợ chồng Lương Triều Vỹ - Lưu Gia
                    Linh lục đục. Tuy vậy, Lưu Gia Linh cũng từng nhiều lần cổ
                    vũ chồng tiếp tục với bộ phim "cực khổ" này của Lý An.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/-16229958248551144362807.jpg"
                    alt="Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, "
                    note="Lương Triều Vỹ đã rất run khi đóng cảnh nóng với Thang Duy"
                  />
                  <h4>
                    Chia sẻ gây sốc của<strong>Thang Duy</strong> và lý do Lý An
                    lựa chọn nữ chính
                  </h4>
                  <p>
                    Vậy phía<strong>Thang Duy</strong> từng nói gì? Khác với
                    Lương Triều Vỹ, lời chia sẻ của mỹ nữ sinh năm 1979 lại
                    khiến ai nấy bất ngờ. "Trong phim chúng tôi chỉ làm những gì
                    nên làm để 'sinh con' mà thôi. Lương Triều Vỹ rất chuyên
                    nghiệp và không cần đóng thế gì cả. Tôi tôn trọng và ngưỡng
                    mộ anh ấy lắm!", Thang Duy cho biết.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/base64-16229955207491981080833.png"
                    alt="Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, "
                    note="Thang Duy không ngại khoe thân"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/mv5bndlhmzrhmdutyjy4nc00mjc0ltk2yzgtmwiyyzg3yzqxytvhxkeyxkfqcgdeqxvynzi1nzmxnzmv1-16229959582791034895517.jpg"
                    alt="Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, "
                    note="Cô làm quá nhiều vì bộ phim, để rồi nhận về kết quả không vui"
                  />
                  <p>
                    Theo như Lý An chia sẻ,<strong>Thang Duy</strong> và Lương
                    Triều Vỹ đã mất đến 12 ngày để hoàn thành những cảnh quay
                    khó nhằn này. Cô nàng vốn dĩ là người lăn xả hơn, bình tĩnh
                    hơn bạn diễn rất nhiều. Vì thế, kết quả không hay sau này
                    của Thang Duy từng khiến Lý An rất áy náy và buồn phiền.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/6/v2-35642e1f0098a75dae5db4d3a2053f3f720w-16229954386551934091772.jpg"
                    alt="Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, "
                    note="Lý An rất áy náy khi Thang Duy bị ảnh hưởng nặng nề vì cảnh nóng"
                  />
                  <p>
                    Ông cũng tiết lộ lý do lựa chọn<strong>Thang Duy</strong>{" "}
                    thay vì Thư Kỳ hay Chương Tử Di như dự kiến. Đó là vì trong
                    buổi casting, Thang Duy đều làm theo bất cứ điều gì Lý An
                    yêu cầu với sự tín nhiệm tuyệt đối. Chung quy cũng dễ hiểu
                    vì Lý An là vị đạo diễn kỳ cựu nắm trong tay tượng vàng
                    Oscar, vì thế được đóng phim của ông chính là bàn đạp không
                    thể nào tốt hơn. Tuy nhiên đối với Thang Duy, đây có lẽ là
                    "duyên phận" khá nghiệt ngã...
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/203336854389633024/2021/6/6/375d85e49f3af9774f84ccc72e59ddbc-16229933306931983444544.gif"
                    alt="Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, "
                    note="Thang Duy rất phối hợp với đạo diễn"
                  />
                  <p>
                    Sắc, Giới từng chiến thắng cực đậm với 7 giải Kim Mã, trong
                    đó có Ảnh đế dành cho Lương Triều Vỹ và giải Tân binh cho
                    <strong>Thang Duy</strong>. Phim kể về việc một nhóm sinh
                    viên cử cô gái xinh đẹp tên Vương Giai Chi dụ dỗ, quyến rũ
                    Dịch tiên sinh - một cán bộ cấp cao để ám sát anh, từ đó tạo
                    điều kiện để nhóm phong trào "đảo chính". Phim có yếu tố
                    lịch sử, thế nhưng vẫn ghi điểm với tuyến tình yêu bị cấm
                    đoán của Thang Duy và Lương Triều Vỹ. Phim có tất cả yếu tố
                    để trở thành tác phẩm kinh điển để đời, nhưng giờ đây khi
                    nhắc lại thì phần đông khán giả sẽ chỉ nhớ về những cảnh
                    nóng "nhức mắt" khiến sự nghiệp Thang Duy "lỡ đò".
                  </p>
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
