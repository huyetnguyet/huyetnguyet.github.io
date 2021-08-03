import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature, RelationNews } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 08/06/2021 02:06 PM",
"title": Dàn trai đẹp U23 sau 3 năm: Đồng loạt lấy vợ có con nhưng độ 'mlem mlem' không hề suy giảm!",
"description": Bạn đã sẵn sàng nhìn lại sự thay đổi của những cầu thủ từng được cả Việt Nam hâm mộ cuồng nhiệt sau 3 năm chưa!",
"src": https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/1-16231658569281054746604.png",
"alt": Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, ",
"category": news",
"date": 08/06/2021",
"time": 02:06 PM",
"link": "/dan-trai-dep-u23-sau-3-nam-dong-loat-lay-vo-co-con-nhung-do-mlem-mlem-khong-he-suy-giam",
"zcomponent": page_20210608140622",
"filepath": ./20210608140622-dan-trai-dep-u23-sau-3-nam-dong-loat-lay-vo-co-con-nhung-do-mlem-mlem-khong-he-suy-giam.js"
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
  "Dàn trai đẹp U23 sau 3 năm: Đồng loạt lấy vợ có con nhưng độ 'mlem mlem' không hề suy giảm!";
const author = "THẾ HUÂN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "08/06/2021 02:06 PM";
const description =
  "Bạn đã sẵn sàng nhìn lại sự thay đổi của những cầu thủ từng được cả Việt Nam hâm mộ cuồng nhiệt sau 3 năm chưa!";
const link =
  "dan-trai-dep-u23-sau-3-nam-dong-loat-lay-vo-co-con-nhung-do-mlem-mlem-khong-he-suy-giam";
const tagparam = [
  "doi-tuyen-bong-da",
  "doi-tuyen-bong-da-viet-nam",
  "world-cup-2022",
  "u23-viet-nam",
  "doi-tuyen-u23-viet-nam",
  "quang-hai",
  "doan-van-hau",
  "cong-phuong",
  "vong-loai-world-cup-2022",
  "bui-tien-dung",
  "hong-duy",
  "duy-manh",
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

export default function page_20210608140622() {
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
                      Vào hồi tháng 1/2018, đội tuyển bóng đá Việt Nam đã hiên
                      ngang bước vào trận chung kết tranh thư hùng với tuyển
                      Uzbekistan ở giải đấu U23 Châu Á 2018 tổ chức tại Thường
                      Châu - Trung Quốc. Hành trình của tuyển U23 kết thúc bằng
                      danh hiệu huy chương bạc, dù không ôm cúp vô địch nhưng
                      những cái tên như Văn Hậu, Hồng Duy, Quang Hải, Duy
                      Mạnh... sau một đêm nổi tiếng không thua gì những ngôi sao
                      hạng A.
                    </p>
                    <p>
                      Chắc chắn những người từng sống trong thời khắc hân hoan -
                      tự hào nhất của thể thao Việt Nam năm ấy vẫn còn nhớ những
                      cái ôm dưới tuyết trắng ở Thường Châu của tuyển U23 chứ
                      đúng không?
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo1517151988760-15171519887601316498333-15171604939871150987835-16231642064531135193954.jpeg"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note="Thường Châu tuyết trắng là kỷ niệm rất đẹp của nhiều người"
                    />
                    <p>
                      Tính đến thời điểm hiện tại đã hơn 3 năm trôi qua, ở trận
                      đấu Việt Nam sS Indonesia trong khuôn khổ vòng loại thứ 2{" "}
                      <strong>World Cup 2022</strong> diễn ra tại Dubai, chiến
                      thắng 4-0 đã một lần nữa khẳng định, lứa cầu thủ vàng ở
                      Thường Châu tuyết trắng năm ấy vẫn vững vàng phong độ.
                    </p>
                    <p>
                      Bạn đã sẵn sàng nhìn lại sự thay đổi của họ sau 3 năm
                      chưa?
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/img4433-16231642064771933370062.jpg"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note="Những chàng trai của chúng ta dưới cái nắng nóng 50 độ C của Dubai bây giờ"
                    />
                    <h4>Quang Hải</h4>
                    <p>
                      Có thể nói Quang Hải từng là người hùng và cũng là "tâm
                      điểm drama" từ kỳ tích Thường Châu tuyết trắng năm ấy.
                      Chàng trai sinh năm 1997 tự nhận bản thân "kém may mắn
                      trong chuyện tình cảm" nhưng trong sự nghiệp, Quang Hải
                      luôn phong độ tưng bừng!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/2w-16231648174311157846236.png"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note="Quang Hải ngày ấy bây giờ vẫn mãi giữ phong độ trên sân cỏ"
                    />
                    <p>
                      Vào năm 2018, Quang Hải đã có màn ghi bàn đi vào huyền
                      thoại của bóng đá Việt Nam ở Thường Châu, thậm chí còn
                      được đặt tên riêng cho cú sút này là "cầu vồng tuyết".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/afc-goi-quang-hai-la-cau-thu-phi-thuong-16231648477401526462106.jpeg"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note="Cú sút huyền thoại của Quang Hải"
                    />
                    <p>
                      Đến năm 2021 ở trận Việt Nam gặp Indonesia, Quang Hải tiếp
                      tục không làm người hâm mộ thất vọng bằng cú sút đẹp mắt
                      khác.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/img4442-2-1-1623164988010169680155.jpg"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note=""
                    />
                    <h4>Công Phượng</h4>
                    <p>
                      Là một trong những cầu thủ xuất sắc nhất lứa U23 Việt Nam
                      ở Thường Châu, và tính tới thời điểm hiện tại, anh vẫn
                      luôn giữ phong độ trên sân cỏ. Trái ngược với sự thị phi
                      về đời tư của Quang Hải, kể từ sau thành công vang dội ở
                      Thường Châu, chàng cầu thủ xứ Nghệ luôn kín tiếng trong
                      đời tư. Vào hồi cuối năm 2020, Công Phượng chính thức cưới
                      Viên Minh - ái nữ của Giám đốc Ngân hàng Nhà nước Việt Nam
                      chi nhánh TP.HCM
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/4rr-1623168091772667045633.png"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note="Cậu bạn không hề thay đổi chút nào"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/a00-6323-1604378850-1623168166205225229421.jpeg"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note="Có chăng là đã trở thành người đàn ông của gia đình mà thôi"
                    />
                    <h4>Xuân Trường</h4>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/9/9-162317217146025325016.png"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note="Thay đổi quá rõ rệt không?"
                    />
                    <p>
                      Cũng giống như người anh em Công Phượng của mình, Xuân
                      Trường cũng đã chính thức lấy vợ là hotgirl RMIT Nhuệ
                      Giang. Từng có thời điểm, Xuân Trường mất điểm trong mắt
                      người hâm mộ vì loạt hành động trên MXH. Đó cũng là lý do
                      mà ở thời điểm hiện tại, Xuân Trường trở nên kín tiếng hơn
                      và gần như "ở ẩn", thi thoảng mới cập nhật vài bức hình
                      làm vui lòng người hâm mộ.{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/9/1-16179468690911494020014-1623172207409277650171.jpeg"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note="Đoàn Văn Hậu được mệnh danh là trai đẹp nhất nhì của tuyển U23 Việt Nam"
                    />
                    <h4>Đoàn Văn Hậu</h4>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/3-16231655090151947649071.png"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note="Đoàn Văn Hậu trong trận Việt Nam gặp Indonesia vừa rồi"
                    />
                    <p>
                      So với những người đồng đội khác, Văn Hậu là chàng trai có
                      sự thay đổi ngoại hình đáng kinh ngạc nhất. Từ cậu thiếu
                      niên có gương mặt búng ra sữa, Văn Hậu giờ đã là thanh
                      niên cao 1m85, thân hình 6 múi vạm vỡ và là cầu thủ được
                      đánh giá sẽ toả sáng hơn nữa trong tương lai.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/photo-1-1517184653309141441681-1623165478055486031644.jpeg"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note="Hồng Duy với lối chơi nhiệt huyết vẫn không có thay đổi gì mấy"
                    />
                    <p>
                      Năm ấy, Đoàn Văn Hậu là chàng trai nhỏ tuổi nhất U23 Việt
                      Nam và rất được các anh của mình cưng chiều.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/19828201515896040645780868277875014613359593n-162316553675625989451.jpg"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note="Trong hoàn cảnh nào thì Mạnh mãi gắt nhé!"
                    />
                    <h4>Hồng Duy</h4>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/1-16231658569281054746604.png"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note=""
                    />
                    <p>
                      Chàng trai "tô son" năm ấy bán hàng online chốt đơn lia
                      lịa bây giờ đã trưởng thành hơn, đá "căng" hơn rất nhiều.
                    </p>
                    <h4>Duy Mạnh</h4>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/111-16231661197551478382035.png"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note="Trận đấu Việt Nam - Indonesia hút hơn 1 triệu người xem trực tiếp trên YouTube"
                    />
                    <p>
                      Duy Mạnh hay còn gọi là "Mạnh gắt", thời còn thi đấu ở
                      Thường Châu vẫn còn là cậu trai tân chưa lập gia đình.
                      Hiện tại, Duy Mạnh đang có cuộc hôn nhân hạnh phúc với
                      "công chúa béo" Quỳnh Anh và có một nhóc tỳ cực kì kháu
                      khỉnh. Tất nhiên, dù đã lên chức bố thì "Mạnh gắt" vẫn mãi
                      là "Mạnh gắt" nhé.
                    </p>
                    <h4>Văn Thanh</h4>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/5-16231663558981542246522.png"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note='Văn Thanh bây giờ đã biết "thả tim" rồi nhé'
                    />
                    <p>
                      Chắc chắn bạn còn nhớ kiểu ăn mừng khoác tay kinh điển của
                      Văn Thanh vào năm 2018 đúng không? Chàng trai đáng yêu năm
                      ấy giờ đã trở thành nam thần sở hữu cơ bắp "múi sầu
                      riêng", đẹp trai phong độ rạng ngời.
                    </p>

                    <h4>Bùi Tiến Dũng</h4>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/6-16231677942861584190981.png"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note=""
                    />
                    <p>
                      Anh chàng vừa gây sốt với màn khoe múi bụng được cô vợ
                      share tưng bừng trên Facebook hoá ra cũng từng... cởi hẳn
                      áo để ăn mừng ở Thường Châu. Cũng giống như Duy Mạnh, Bùi
                      Tiến Dũng sau 3 năm thì giờ cũng đã lên chức bố, có tổ ấm
                      hạnh phúc với cô nàng Khánh Linh.
                    </p>
                    <h4>Khán giả</h4>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/8/8-1623168555810204765100.png"
                      alt="Doi Tuyen Bong Da, Doi Tuyen Bong Da Viet Nam, World Cup 2022, U23 Viet Nam, Doi Tuyen U23 Viet Nam, Quang Hai, Doan Van Hau, Cong Phuong, Vong Loai World Cup 2022, Bui Tien Dung, Hong Duy, Duy Manh, "
                      note=""
                    />
                    <p>
                      Một "nhân vật" vô cùng đặc biệt khác mà chúng ta không thể
                      không liệt kê đó chính là những khán giả cuồng nhiệt của
                      đội tuyển U23 Việt Nam. Ba năm trước, dân tình tha hồ tụ
                      tập đông đúc ở quán cà phê, quảng trường để xem đá bóng,
                      thì hiện tại, chúng ta phải cổ vũ các chàng trai tại nhà,
                      xem livestream trên YouTube vì ảnh hưởng của COVID-19.
                      Nhưng xem đá bóng bằng cách nào thì quan trọng nhất là
                      tình yêu dành cho bộ môn thể thao vua vẫn không hề thay
                      đổi. Đúng không "quý zị"?
                    </p>
                    <p>Nguồn: Tổng hợp</p>
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
