import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import user from "../../assets/img/avatar1.png";
import Button from "../../Generics/Button";
import Input from "../../Generics/Input";
import Details from "../Details";
import Features from "../Features";
import Reviews from "../Reviews";
import Schedule from "../Schedule";
import Yandex from "../Yandex";
import { Image } from "antd";
import { Button as ButtonA, Modal } from "antd";
import {
  Avatar,
  Blur,
  Br,
  CardBody,
  CardContent,
  CardHead,
  Container,
  Content,
  DownloadWapper,
  Icons,
  ImgWrap,
  Section,
  Wrapper,
} from "./style";

const HouseItem = () => {
  let { id } = useParams();
  console.log(id);
  const [data, setData] = useState({});
  const { city, description } = data;
  useEffect(() => {
    const { REACT_APP_BASE_URL: url } = process.env;

    fetch(`${url}/houses/id/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }, []);

  // madal for all images

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(null);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText(
      <Section grid>
        {data?.attachments &&
          data?.attachments.slice(5).map((value, index) => {
            return <Image key={index} height={190} src={value.imgPath} />;
          })}
      </Section>
    );
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        title="the rest of the pictures"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>

      <Wrapper img>
        <Container>
          <Section flex>
            <Section>
              <Image
                width={520}
                height={400}
                main
                src={data?.attachments ? data?.attachments[0]?.imgPath : ""}
              />
            </Section>

            <Section grid>
              {data?.attachments &&
                data?.attachments?.slice(1, 5).map((value, index) => {
                  return data?.attachments.length > 4 && index === 3 ? (
                    <ImgWrap key={index}>
                      <Blur onClick={showModal}>
                        +{data?.attachments.length - 5}
                      </Blur>
                      <Image
                        width={270}
                        height={190}
                        key={index}
                        src={value?.imgPath}
                      />
                    </ImgWrap>
                  ) : (
                    <Image
                      width={270}
                      height={190}
                      key={index}
                      src={value?.imgPath}
                    />
                  );
                })}
            </Section>
          </Section>
        </Container>
        <Container flex>
          <Container>
            <Section>
              <Content>
                <h3>{city}</h3>
                <p>{description}</p>
              </Content>
              <Content flex>
                <div>
                  <Icons.Share />
                  <p>Share</p>
                </div>
                <div>
                  <Icons.Like />
                  <p>Save</p>
                </div>
              </Content>
            </Section>
            <Section>
              <Content flex icons>
                <div>
                  <Icons.Beds />
                  <p className="subTitle">
                    {data.houseDetails && data.houseDetails.beds} Beds
                  </p>
                </div>
                <div>
                  <Icons.Baths />
                  <p className="subTitle">
                    {data.houseDetails && data.houseDetails.bath} Baths
                  </p>
                </div>
                <div>
                  <Icons.Car />
                  <p className="subTitle">
                    {data.houseDetails && data.houseDetails.garage} Garage
                  </p>
                </div>
                <div>
                  <Icons.Sq />
                  <p className="subTitle">
                    {data.houseDetails && data.houseDetails.room} Sq ft
                  </p>
                </div>
                <div>
                  <Icons.Years />
                  <p className="subTitle">
                    Year Built:{" "}
                    {data.houseDetails && data.houseDetails.yearBuilt}
                  </p>
                </div>
              </Content>
              <Content>
                <div>
                  <del className="subTitle">{data.price}/mo</del>
                  <h2>{data.salePrice}/mo</h2>
                </div>
                <Content className="subTitle">
                  {data.user && data.user.firstname}
                </Content>
              </Content>
            </Section>
            <Section>
              <Content>
                <h3 className="description">Description</h3>
                <p className="subTitle text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                  pariatur quo et repellat unde nostrum, vitae enim, odit neque,
                  perspiciatis provident est illum magnam iusto deleniti
                  obcaecati sunt eius dolorem similique voluptatem tempore autem
                  mollitia perferendis? Sit cupiditate iste nemo deserunt.
                  Suscipit, neque est! Odio perspiciatis distinctio doloremque
                  amet quasi adipisci sequi voluptatum error modi provident
                  voluptate, rerum praesentium? Consectetur corrupti ipsa
                  molestias, odit ullam veniam quas pariatur ipsam. Esse fugiat
                  ipsa minima temporibus. Eos asperiores possimus rerum ab
                  corporis, labore debitis facilis maiores dolore aut. Eveniet
                  sit saepe hic dignissimos eum, a distinctio fuga. Voluptate
                  voluptates quisquam architecto, natus numquam vero illo? Rerum
                  in doloribus, aspernatur qui dicta quo placeat reprehenderit,
                  repellat a, quis voluptates hic perspiciatis possimus esse
                  doloremque. Recusandae explicabo, quae
                </p>
                <a href="./">Show more</a>
              </Content>
            </Section>
          </Container>
          <Container card>
            <CardContent>
              <CardHead>
                <Avatar src={user} />
                <div>
                  <h3>{data.user && data.user.firstname}</h3>
                  <p>+998 90 406 14 30</p>
                </div>
              </CardHead>
            </CardContent>
            <CardBody>
              <Input ml={"0"} placeholder={"Name"} typing={"login"} />
              <Input ml={"0"} placeholder={"Phone"} typing={"login"} />
              <Input ml={"0"} placeholder={"Email"} typing={"login"} />
              <h3>Message</h3>
              <Input ml={"0"} placeholder={"Message"} typing={"login"} />
              <div className="check">
                <input type="checkbox" />
                <p className="subTitle">
                  By submitting this form I agree to Terms of Use
                </p>
              </div>
              <Button width={"%"} mt={"24"}>
                Send request
              </Button>
            </CardBody>
          </Container>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <h3>Documents</h3>
          <div className="down">
            <DownloadWapper>
              <Icons.Download />
              test_property.pdf
              <a href="#">Download</a>
            </DownloadWapper>
            <DownloadWapper>
              <Icons.Download />
              test_property.pdf
              <a href="#">Download</a>
            </DownloadWapper>
            <DownloadWapper>
              <Icons.Download />
              test_property.pdf
              <a href="#">Download</a>
            </DownloadWapper>
          </div>
          <Br />
        </Container>
        <Container card className="nocard"></Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <h3>Location</h3>
          <div className="down">
            <DownloadWapper location>
              <div>
                <p className="address">Address:</p>
                <p className="subTitle">{data?.address}</p>
              </div>
              <div>
                <p className="address">State/County:</p>
                <p className="subTitle">{data?.region}</p>
              </div>
            </DownloadWapper>
            <DownloadWapper location>
              <div>
                <p className="address">City:</p>
                <p className="subTitle">{data?.city}</p>
              </div>
              <div>
                <p className="address">zipCode:</p>
                <p className="subTitle">{data?.zipCode}</p>
              </div>
            </DownloadWapper>
            <DownloadWapper location>
              <div>
                <p className="address">Area:</p>
                <p className="subTitle">{data?.houseDetails?.area}</p>
              </div>
              <div>
                <p className="address">Country</p>
                <p className="subTitle">{data?.country}</p>
              </div>
            </DownloadWapper>
          </div>
          <Yandex />
          <Details />
          <Features />
          <Schedule />
          <Reviews />
        </Container>
        <Container card className="nocard"></Container>
      </Wrapper>
    </>
  );
};
export default HouseItem;
