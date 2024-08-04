

const About = () => {
    return (
      <div className="   flex items-start relative  h-[60rem] bg-[#F6F4FF]  mx-auto w-full">
        <div
          className="w-[45%]  sticky top-0  left-16
          overflow-x-hidden overflow-y-hidden  -red-800"
        >
          {/* left side div */}
          <div className="  flex flex-col justify-center   px-16 gap-4 mt-32">
            <h2 className="text-2xl text-[#8800FF]">Company Values</h2>
            <h2 className="text-4xl   from-neutral-500  font-extrabold  text-[#19154E]">
              Our core values.
            </h2>
            <p className="-500 w-full">
              Create beautiful pages within minutes directly in Framer. Easily
              customize images, content, and style to make it your own.
            </p>
            <p className=" text-purple-600 font-bold">
              Join Our Team
              <span className=" relative px-10 ">
                <img
                  className="h-4 w-8 text-2xl top-1 absolute inset-0"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmb2N1c2FibGU9ImZhbHNlIiBjb2xvcj0idmFyKC0tdG9rZW4tMmU2MDY1ODAtYzVjYi00NWMyLWE2NmUtMDdjYjhkYmU1YTM4LCByZ2IoMTM2LCAwLCAyNTUpKSIgc3R5bGU9InVzZXItc2VsZWN0OiBub25lOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZpbGw6IHZhcigtLXRva2VuLTJlNjA2NTgwLWM1Y2ItNDVjMi1hNjZlLTA3Y2I4ZGJlNWEzOCwgcmdiKDEzNiwgMCwgMjU1KSk7IGZsZXgtc2hyaW5rOiAwOyI+PGcgY29sb3I9InZhcigtLXRva2VuLTJlNjA2NTgwLWM1Y2ItNDVjMi1hNjZlLTA3Y2I4ZGJlNWEzOCwgcmdiKDEzNiwgMCwgMjU1KSkiIHdlaWdodD0iYm9sZCI+PGxpbmUgeDE9IjQwIiB5MT0iMTI4IiB4Mj0iMjE2IiB5Mj0iMTI4IiBmaWxsPSJub25lIiBzdHJva2U9InZhcigtLXRva2VuLTJlNjA2NTgwLWM1Y2ItNDVjMi1hNjZlLTA3Y2I4ZGJlNWEzOCwgcmdiKDEzNiwgMCwgMjU1KSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyNCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9IjE0NCA1NiAyMTYgMTI4IDE0NCAyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0idmFyKC0tdG9rZW4tMmU2MDY1ODAtYzVjYi00NWMyLWE2NmUtMDdjYjhkYmU1YTM4LCByZ2IoMTM2LCAwLCAyNTUpKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjI0Ij48L3BvbHlsaW5lPjwvZz48L3N2Zz4="
                ></img>
              </span>
            </p>
          </div>
        </div>
        {/* right side div */}
        <div className=" w-[70%] flex overflow-y-auto flex-col   items-center gap-6 py-11  h-fit    -black">
          <div className=" mt-20 flex flex-col gap-5 h-full py-3 px-3">
            <div className="   h-54 flex gap-5 bg-white rounded-[25px] py-8 px-5  w-[32rem] ">
              <div className="bg-[#f6f4ff] py-1 h-10 w-32 rounded-lg">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmb2N1c2FibGU9ImZhbHNlIiBjb2xvcj0idmFyKC0tdG9rZW4tMmU2MDY1ODAtYzVjYi00NWMyLWE2NmUtMDdjYjhkYmU1YTM4LCByZ2IoMTM2LCAwLCAyNTUpKSAvKiB7JnF1b3Q7bmFtZSZxdW90OzomcXVvdDtQdXJwbGUmcXVvdDt9ICovIiBzdHlsZT0idXNlci1zZWxlY3Q6IG5vbmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgZmlsbDogdmFyKC0tdG9rZW4tMmU2MDY1ODAtYzVjYi00NWMyLWE2NmUtMDdjYjhkYmU1YTM4LCByZ2IoMTM2LCAwLCAyNTUpKTsgZmxleC1zaHJpbms6IDA7Ij48ZyBjb2xvcj0idmFyKC0tdG9rZW4tMmU2MDY1ODAtYzVjYi00NWMyLWE2NmUtMDdjYjhkYmU1YTM4LCByZ2IoMTM2LCAwLCAyNTUpKSAvKiB7JnF1b3Q7bmFtZSZxdW90OzomcXVvdDtQdXJwbGUmcXVvdDt9ICovIiB3ZWlnaHQ9ImZpbGwiPjxwYXRoIGQ9Ik0yMjUuOSwxMDIuOGMtMy44LTMuOS03LjctOC05LjItMTEuNXMtMS40LTguNy0xLjUtMTRjLS4xLTkuNy0uMy0yMC44LTgtMjguNXMtMTguOC03LjktMjguNS04Yy01LjMtLjEtMTAuNy0uMi0xNC0xLjVzLTcuNi01LjQtMTEuNS05LjJDMTQ2LjMsMjMuNSwxMzguNCwxNiwxMjgsMTZzLTE4LjMsNy41LTI1LjIsMTQuMWMtMy45LDMuOC04LDcuNy0xMS41LDkuMnMtOC43LDEuNC0xNCwxLjVjLTkuNy4xLTIwLjguMy0yOC41LDhzLTcuOSwxOC44LTgsMjguNWMtLjEsNS4zLS4yLDEwLjctMS41LDE0cy01LjQsNy42LTkuMiwxMS41QzIzLjUsMTA5LjcsMTYsMTE3LjYsMTYsMTI4czcuNSwxOC4zLDE0LjEsMjUuMmMzLjgsMy45LDcuNyw4LDkuMiwxMS41czEuNCw4LjcsMS41LDE0Yy4xLDkuNy4zLDIwLjgsOCwyOC41czE4LjgsNy45LDI4LjUsOGM1LjMuMSwxMC43LjIsMTQsMS41czcuNiw1LjQsMTEuNSw5LjJjNi45LDYuNiwxNC44LDE0LjEsMjUuMiwxNC4xczE4LjMtNy41LDI1LjItMTQuMWMzLjktMy44LDgtNy43LDExLjUtOS4yczguNy0xLjQsMTQtMS41YzkuNy0uMSwyMC44LS4zLDI4LjUtOHM3LjktMTguOCw4LTI4LjVjLjEtNS4zLjItMTAuNywxLjUtMTRzNS40LTcuNiw5LjItMTEuNWM2LjYtNi45LDE0LjEtMTQuOCwxNC4xLTI1LjJTMjMyLjUsMTA5LjcsMjI1LjksMTAyLjhabS00OC40LDctNTguNiw1NmE4LjEsOC4xLDAsMCwxLTUuNiwyLjIsNy45LDcuOSwwLDAsMS01LjUtMi4ybC0yOS4zLTI4YTgsOCwwLDEsMSwxMS0xMS42bDIzLjgsMjIuNyw1My4yLTUwLjdhOCw4LDAsMCwxLDExLDExLjZaIj48L3BhdGg+PC9nPjwvc3ZnPg=="></img>
              </div>
              <div className=" flex flex-col gap-5  from-neutral-500 ">
                <p className=" text-purple-600 text-3xl">Authenticity</p>
                <p className="text-[#8e8e8e] text-l">
                We believe in authenticity and transparency in everything we do. From the content of our coding contests and quizzes to our interactions with our community, we strive to be genuine, honest, and true to our mission.
                </p>
              </div>
            </div>
            <div className="  -red-900 h-54 flex gap-5 bg-white rounded-[25px] py-8 px-5  w-[32rem] ">
              <div className=" bg-[#f6f4ff] py-1 bg12ray-400 h-10 w-40 rounded-lg">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmb2N1c2FibGU9ImZhbHNlIiBjb2xvcj0idmFyKC0tdG9rZW4tMmU2MDY1ODAtYzVjYi00NWMyLWE2NmUtMDdjYjhkYmU1YTM4LCByZ2IoMTM2LCAwLCAyNTUpKSAvKiB7JnF1b3Q7bmFtZSZxdW90OzomcXVvdDtQdXJwbGUmcXVvdDt9ICovIiBzdHlsZT0idXNlci1zZWxlY3Q6IG5vbmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgZmlsbDogdmFyKC0tdG9rZW4tMmU2MDY1ODAtYzVjYi00NWMyLWE2NmUtMDdjYjhkYmU1YTM4LCByZ2IoMTM2LCAwLCAyNTUpKTsgZmxleC1zaHJpbms6IDA7Ij48ZyBjb2xvcj0idmFyKC0tdG9rZW4tMmU2MDY1ODAtYzVjYi00NWMyLWE2NmUtMDdjYjhkYmU1YTM4LCByZ2IoMTM2LCAwLCAyNTUpKSAvKiB7JnF1b3Q7bmFtZSZxdW90OzomcXVvdDtQdXJwbGUmcXVvdDt9ICovIiB3ZWlnaHQ9ImZpbGwiPjxwYXRoIGQ9Ik0xMjEuMiwxNTcuOWE2MCw2MCwwLDEsMC02Ni40LDBBOTUuNSw5NS41LDAsMCwwLDkuNSwxOTIuOGE3LjgsNy44LDAsMCwwLS42LDguMyw4LjEsOC4xLDAsMCwwLDcuMSw0LjNIMTYwYTguMSw4LjEsMCwwLDAsNy4xLTQuMyw3LjgsNy44LDAsMCwwLS42LTguM0E5NS41LDk1LjUsMCwwLDAsMTIxLjIsMTU3LjlaIj48L3BhdGg+PHBhdGggZD0iTTI0OC4xLDE5Mi44YTk2LjMsOTYuMywwLDAsMC00NS40LTM0LjlBNTkuOSw1OS45LDAsMCwwLDE2OS41LDQ4YTY0LDY0LDAsMCwwLTE2LjMsMi4yLDguMiw4LjIsMCwwLDAtNS40LDUuMiw4LDgsMCwwLDAsMS4yLDcuMyw3NS44LDc1LjgsMCwwLDEsMy44LDg0LjksOC4xLDguMSwwLDAsMCwyLjEsMTAuNnE0LjUsMy41LDguNyw3LjJsLjUuNWExMTIuNiwxMTIuNiwwLDAsMSwyNS41LDM0LjksNy45LDcuOSwwLDAsMCw3LjIsNC42aDQ0LjdhOC4xLDguMSwwLDAsMCw3LjEtNC4zQTgsOCwwLDAsMCwyNDguMSwxOTIuOFoiPjwvcGF0aD48L2c+PC9zdmc+"></img>
              </div>
              <div className="">
                <p className=" text-purple-600 text-3xl pb-4 ">Team Work</p>
                <p className="text-[#8e8e8e] text-l">
                We value teamwork and collaboration. We believe that by working together, we can achieve more than we ever could alone. We foster a culture of cooperation, mutual support, and respect among our team members and community contributors.
                </p>
              </div>
            </div>
            <div className="  -red-900 h-54 flex gap-5 bg-white rounded-[25px] py-8 px-5  w-[32rem] ">
              <div className=" bg-[#f6f4ff] py-1 h-10 w-40 rounded-lg">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmb2N1c2FibGU9ImZhbHNlIiBjb2xvcj0idmFyKC0tdG9rZW4tMmU2MDY1ODAtYzVjYi00NWMyLWE2NmUtMDdjYjhkYmU1YTM4LCByZ2IoMTM2LCAwLCAyNTUpKSAvKiB7JnF1b3Q7bmFtZSZxdW90OzomcXVvdDtQdXJwbGUmcXVvdDt9ICovIiBzdHlsZT0idXNlci1zZWxlY3Q6IG5vbmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgZmlsbDogdmFyKC0tdG9rZW4tMmU2MDY1ODAtYzVjYi00NWMyLWE2NmUtMDdjYjhkYmU1YTM4LCByZ2IoMTM2LCAwLCAyNTUpKTsgZmxleC1zaHJpbms6IDA7Ij48ZyBjb2xvcj0idmFyKC0tdG9rZW4tMmU2MDY1ODAtYzVjYi00NWMyLWE2NmUtMDdjYjhkYmU1YTM4LCByZ2IoMTM2LCAwLCAyNTUpKSAvKiB7JnF1b3Q7bmFtZSZxdW90OzomcXVvdDtQdXJwbGUmcXVvdDt9ICovIiB3ZWlnaHQ9ImZpbGwiPjxwYXRoIGQ9Ik0xMTkuOCwyMTQuOGE4LjEsOC4xLDAsMCwxLTcuOCw2LjEsNi4zLDYuMywwLDAsMS0xLjktLjNsLTMwLjItNy41YTE1LjcsMTUuNywwLDAsMS02LjYtMy41TDUwLjgsMTkwYTcuOSw3LjksMCwxLDEsMTAuNC0xMmwyMi42LDE5LjYsMzAuMSw3LjVBOC4xLDguMSwwLDAsMSwxMTkuOCwyMTQuOFptMTMyLjYtOTUuMmExNS44LDE1LjgsMCwwLDEtOC4xLDkuM0wyMjEsMTQwLjZsLTE0LjksMTcuNWgtLjJjMCwuMS0uMS4xLS4xLjJoLS4xbC0zNi44LDM2LjhhMTYuNSwxNi41LDAsMCwxLTExLjQsNC43LDE1LjgsMTUuOCwwLDAsMS0zLjgtLjVMOTUuNywxODVhMTUuMiwxNS4yLDAsMCwxLTYtMi45bC01NC00Mi4yLTI0LTEyYTE2LjMsMTYuMywwLDAsMS04LjEtOS40LDE2LDE2LDAsMCwxLDEuMS0xMi4zTDI5LjMsNTkuMWExNi4xLDE2LjEsMCwwLDEsMjEuMy03TDczLDYzLjNsNDguNy0xNC4yYTE2LjYsMTYuNiwwLDAsMSwxMSwuOGwzMywxNWgxNi40bDIzLjMtMTEuN2ExNiwxNiwwLDAsMSwyMS4zLDYuOWwyNC42LDQ3LjFBMTYuMiwxNi4yLDAsMCwxLDI1Mi40LDExOS42Wm0tNjQuNywzNC4yLTMxLjYtMjMtOC4xLDYuMWE0MC4yLDQwLjIsMCwwLDEtNDgsMGwtNS40LTQuMWExNS45LDE1LjksMCwwLDEtMS43LTI0LjFMMTMyLDY5LjVsMS44LTEuNS03LjctMy41TDc3LjQsNzguNyw1MC4yLDEzMC45bDQ5LjQsMzguNkwxNTcuNSwxODRabTE4LjctMjAuN0wxNzkuMiw4MC45SDE0My4zTDEwNC4yLDEyMGw1LjQsNC4xYTI0LjMsMjQuMywwLDAsMCwyOC44LDBsMTIuOC05LjZhOCw4LDAsMCwxLDkuNS0uMWwzOCwyNy42WiI+PC9wYXRoPjwvZz48L3N2Zz4="></img>
              </div>
              <div>
                <p className=" text-purple-600 text-3xl pb-4">Commitment</p>
                <p className="text-[#8e8e8e] text-l">
                We are deeply committed to our users, our platform, and our mission. We are dedicated to providing the best possible experience for our community members and are committed to continually improving and evolving to meet their needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;