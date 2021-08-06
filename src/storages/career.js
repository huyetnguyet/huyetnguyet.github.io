import React from "react";
import "components/page.scss";
import { AdsVertical } from "components/adsMethods";

import { Content, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

const title = "Career";
const description =
  "Chào mừng bạn đến với huyetnguyet.com, chúng tôi là website cung cấp thông tin về games and đời sống game thủ. Hy vọng chúng ta có cơ hội hợp tác trong tương lai.";
const link = "career";

const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

export default function Career() {
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
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <iframe
                      title="application"
                      src="https://docs.google.com/forms/d/e/1FAIpQLSf6gX7K5YMKKbXYdACNW2UZrSBNh7_FOc53da2qhL4y4GkLzg/viewform?embedded=true"
                      width="700"
                      height="2500"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </div>

              <FacebookShareButton link={facebookLinkShare} />
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
