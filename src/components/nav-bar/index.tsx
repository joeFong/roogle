import React from "react";
import Search from '../search'
import { SocialButton } from '../share-button'
import {
  FaLinkedinIn,
  FaFacebookF,
  FaPinterest,
  FaSquareXTwitter
} from "react-icons/fa6";

export default function Navbar(props: any) {
  const { useThemedLogo, withSearch } = props
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="w-full px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black"
              href="/"
            >
              {
                useThemedLogo ? 
                <h1 className={'text-2xl mr-4'}>
                <span style={{color: "#4285F4"}}>R</span>
                <span style={{color: "#EA4335"}}>o</span>
                <span style={{color: "#FBBC05"}}>o</span>
                <span style={{color: "#00A1F1"}}>g</span>
                <span style={{color: "#34A853"}}>l</span>
                <span style={{color: "#F67314"}}>e</span>
                </h1> : 
                "Roogle"
              }
            </a>
          </div>
          {
            withSearch ? 
            <div className="flex items-center flex w-4/5">
              <Search/>
            </div>
            : <></>
          }
          <div
            className={
              "items-center flex"
            }
            id="example-navbar-danger"
          >
            <div className="flex justify-center space-x-2 text-gray-700">
              {/* <SocialButton label="Pinterest" href={`https://www.pinterest.com/pin/create/link/?url=${fullUrl}&media=${product?.scan?.thumbnail || "https://spoonfulapp.com/images/product-not-found.webp"}&description=${title + ' %0A%0A ' + description + ' %0A '}`}>
                <FaPinterest size="18" />
              </SocialButton>
              <SocialButton label="X" href={`https://twitter.com/intent/tweet?text=${title + ' %0A%0A ' + description + ' %0A '}&url=${fullUrl}`}>
                <FaSquareXTwitter size="18" />
              </SocialButton>
              <SocialButton label="Facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`}>
                <FaFacebookF size="18" />
              </SocialButton>
              <SocialButton label="LinkedIn" href={`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${title}&summary=${description}&source=website`}>
                <FaLinkedinIn size="18" />
              </SocialButton> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}