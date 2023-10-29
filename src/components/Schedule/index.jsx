import React, {  useState } from "react";
import { Container, DownloadWapper } from "./style";
import { DatePicker, Select, Space, TimePicker } from "antd";
import Input from "../../Generics/Input";
import Button from "../../Generics/Button";

const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
  if (type === "time") return <TimePicker onChange={onChange} />;
  if (type === "date") return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const Schedule = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [type, setType] = useState("time")

  return (
    <Container>
      <div className="title">
      <h3>Schedule A Tour</h3>
      <h3>Time</h3>
      </div>

      <div className="down">
        <DownloadWapper location>
          <div>
            <Space direction="vertical">
              <DatePicker onChange={onChange} />
            </Space>
          </div>
        </DownloadWapper>
        <DownloadWapper location>
          <div>
            <Space>
              <PickerWithType type={type} onChange={(value) => value} />
            </Space>
          </div>
        </DownloadWapper>

      </div>

        <h3 className="info">Your Information</h3>

      <div className="down">
        <DownloadWapper location>
          <div>
          <Input ml={"0"} placeholder={"Name"} typing={"login"} type={'text'} />
          </div>
        </DownloadWapper>
        <DownloadWapper location>
          <div>
          <Input ml={"0"} placeholder={"Phone"} typing={"login"} type={'number'} />
          </div>
        </DownloadWapper>
        <DownloadWapper location>
          <div>
          <Input ml={"0"} placeholder={"Email"} typing={"login"} type={'email'} />
          </div>
        </DownloadWapper>
      </div>
        <Input ml={"0"} placeholder={"Message"} typing={"login"} mt={'30'}/>
        <Button ml={'0'} mt={'25'}>Submit a tour request</Button>
    </Container>
  );
};

export default Schedule;
