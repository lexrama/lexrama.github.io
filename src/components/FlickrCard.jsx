import React from "react";

export default function FlickrCard() {
  return (
    <>
      <a
        data-flickr-embed="true"
        href="https://www.flickr.com/gp/133825690@N04/o1V00164Tp"
        title="Best Shots"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://live.staticflickr.com/7675/26497677404_93a53597bf_z.jpg"
          alt="Best Shots"
        />
      </a>
      <script
        async
        src="//embedr.flickr.com/assets/client-code.js"
        charset="utf-8"
      />
    </>
  );
}
