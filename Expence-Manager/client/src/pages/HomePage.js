import React, { useState, useEffect } from "react";
import { Input, Modal, Select, message, Table, DatePicker } from "antd";
import {
  UnorderedListOutlined,
  AreaChartOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Layout from "./../components/Layout/Layout";
import Form from "antd/es/form/Form";
import axios from "axios";
import Spinner from "../components/Spinner";
import moment from "moment";
import Analytics from "../components/Analytics";
import html2pdf from "html2pdf.js";
import { useNavigate } from "react-router-dom";

const { RangePicker } = DatePicker;

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allTransections, setAllTransections] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [selectedDate, setSelectedDate] = useState([]);
  const [type, setType] = useState("all");
  const [viewData, setViewData] = useState("table");
  const [editable, setEditable] = useState(null);
  const navigate = useNavigate();
  //table data
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Refrence",
      dataIndex: "refrence",
    },
    {
      title: "Actions",
      render: (text, record) => (
        <div>
          <EditOutlined
            onClick={() => {
              setEditable(record);
              setShowModal(true);
            }}
          />
          <DeleteOutlined
            className="mx-2"
            on
            onClick={() => {
              handleDelete(record);
            }}
          />
        </div>
      ),
    },
  ];
  //get all transactions

  //useeffect hook
  useEffect(() => {
    const getAllTransection = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        setLoading(true);
        const res = await axios.post("/transections/get-transection", {
          userid: user._id,
          frequency,
          selectedDate,
          type,
        });
        setLoading(false);
        setAllTransections(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);

        message.error("failed to fetch transections");
      }
    };
    getAllTransection();
  }, [frequency, selectedDate, type]);
  //delete handler
  const handleDelete = async (record) => {
    try {
      setLoading(true);
      await axios.post("/transections/delete-transection", {
        transacationId: record._id,
      });
      setLoading(false);
      message.success("Transaction Deleted");
      window.location.reload();
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error("unable to delete");
      window.location.reload();
    }
  };

  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      if (editable) {
        await axios.post("/transections/edit-transection", {
          payload: {
            ...values,
            userId: user._id,
          },
          transacationId: editable._id,
        });
        setLoading(false);
        message.success("Transactions Edited Successfully");
        window.location.reload();
      } else {
        await axios.post("/transections/add-transection", {
          ...values,
          userid: user._id,
        });
        setLoading(false);
        message.success("Transactions Added Successfully");
        window.location.reload();
      }

      setShowModal(false);
      setEditable(null);
    } catch (error) {
      setLoading(false);
      message.error("Failed to add transaction");
      window.location.reload();
    }
  };
  return (
    <Layout>
      {loading && <Spinner />}
      <div class="container ram111">
        <div className="filters">
          <div>
            <h6 className="text_color">Select frequency</h6>
            <Select
              value={frequency}
              onChange={(values) => setFrequency(values)}
            >
              <Select.Option value="50000"> All </Select.Option>
              <Select.Option value="7">Last 1 Week</Select.Option>
              <Select.Option value="30">Last 1 Month</Select.Option>
              <Select.Option value="365">Last 1 Year</Select.Option>
              <Select.Option value="custom">Custom</Select.Option>
            </Select>
            {frequency === "custom" && (
              <RangePicker
                value={selectedDate}
                onChange={(values) => setSelectedDate(values)}
              />
            )}
          </div>
          <div>
            <h6 className="text_color">Select Type</h6>
            <Select value={type} onChange={(values) => setType(values)}>
              <Select.Option value="all"> All </Select.Option>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
            {frequency === "custom" && (
              <RangePicker
                value={selectedDate}
                onChange={(values) => setSelectedDate(values)}
              />
            )}
          </div>
          <div className="switch-icon">
            <UnorderedListOutlined
              className={`mx-2 ${
                viewData === "table" ? "active-icon" : "inactive-icon"
              }`}
              onClick={() => setViewData("table")}
            />

            <AreaChartOutlined
              className={`mx-2 ${
                viewData === "analytics" ? "active-icon" : "inactive-icon"
              }`}
              onClick={() => setViewData("analytics")}
            />
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Add New
            </button>
          </div>
          <div>
        <button
          onClick={() =>
            navigate(
              `/Expense_Tracker/summary?frequency=${frequency}&type=${type}`
            )
          }
          className="btn btn-primary button23"
        >
          Generate Statement
        </button>
      </div>
        </div>
        <div className="content">
          {viewData === "table" ? (
            <Table columns={columns} dataSource={allTransections} />
          ) : (
            <Analytics allTransections={allTransections} />
          )}
        </div>

        <Modal
          title={editable ? "Edit Transaction" : "Add Transaction"}
          open={showModal}
          onCancel={() => setShowModal(false)}
          footer={false}
        >
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={editable}
          >
            <Form.Item label="Amount" name="amount">
              <Input type="text" />
            </Form.Item>
            <Form.Item label="Type" name="type">
              <Select>
                <Select.Option value="income">Income</Select.Option>
                <Select.Option value="expense">Expense</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Category" name="category">
              <Select>
                <Select.Option value="salary">Salary</Select.Option>
                <Select.Option value="tip">Tip</Select.Option>
                <Select.Option value="project">Project</Select.Option>
                <Select.Option value="food">Food</Select.Option>
                <Select.Option value="movie">Movie</Select.Option>
                <Select.Option value="bills">Bills</Select.Option>
                <Select.Option value="medical">Medical</Select.Option>
                <Select.Option value="fees">Fees</Select.Option>
                <Select.Option value="tax">Tax</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Date" name="date">
              <Input type="date" />
            </Form.Item>
            <Form.Item label="Refrence" name="refrence">
              <Input type="text" />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input type="text" />
            </Form.Item>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                {" "}
                SAVE
              </button>
            </div>
          </Form>
        </Modal>
      </div>
    </Layout>
  );
};

export default HomePage;
