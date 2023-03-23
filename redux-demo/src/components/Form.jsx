import { Button, Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import axios from "axios";

const Form = ({ open, handleClose, companyApi }) => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyUsername, setCompanyUsername] = useState("");
  const [companyPassword, setCompanyPassword] = useState("");
  const [companyMobileNo, setCompanyMobileNo] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setCompanyName(companyApi.company_name);
    setCompanyEmail(companyApi.company_email);
    setCompanyUsername(companyApi.company_username);
    setCompanyPassword(companyApi.company_password);
    setCompanyMobileNo(companyApi.company_mobile_no);
    setCompanyAddress(companyApi.company_address);
    setUserId(companyApi._id);
  }, [
    companyApi.company_name,
    companyApi.company_email,
    companyApi.company_username,
    companyApi.company_password,
    companyApi.company_mobile_no,
    companyApi.company_address,
  ]);

  const handleSave = () => {
    console.log(
      companyName,
      companyEmail,
      companyMobileNo,
      companyUsername,
      userId
    );

    const token = localStorage.getItem("myToken");
    console.log("token", token);
    let mytoken = " ";

    if (token) {
      const obj = JSON.parse(token);
      mytoken = obj.token;
      console.log("mytoken", mytoken);
    }
    axios
      .put(
        `https://messagingtest.vitelglobal.com/nodejs/web/company/${userId}`,

        {
          setCompanyName: companyName,
          setCompanyEmail: companyEmail,
          setCompanyMobileNo: companyMobileNo,
          setCompanyUsername: companyUsername,
          setCompanyPassword: companyPassword,
          setCompanyAddress: companyAddress,
          userId: userId,
        },
        {
          headers: {
            authorization: `${mytoken}`,
          },
        }
      )
      .then((response) => {
        console.log("then=========", response);
      })
      .catch(function (error) {
        console.log(error);
      });
    handleClose();
  };

  return (
    <div>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Box
              sx={{
                background: "white",
                height: "100vh",
                width: "400px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  m: 2,
                }}
              >
                <h2>Edit Company</h2>

                <CloseIcon onClick={handleClose} />
              </Box>
              <Divider />
              {/* Form */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextField
                  className="input-box"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                />
                <TextField
                  className="input-box"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  value={companyEmail}
                />
                <TextField
                  className="input-box"
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  onChange={(e) => setCompanyUsername(e.target.value)}
                  value={companyUsername}
                />
                <TextField
                  className="input-box"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  onChange={(e) => setCompanyPassword(e.target.value)}
                  value={companyPassword}
                />
                <TextField
                  className="input-box"
                  id="outlined-basic"
                  label="Mobile No"
                  variant="outlined"
                  onChange={(e) => setCompanyMobileNo(e.target.value)}
                  value={companyMobileNo}
                />
                <TextField
                  className="input-box"
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  onChange={(e) => setCompanyAddress(e.target.value)}
                  value={companyAddress}
                />
              </Box>
              {/* Close & Save  Button */}
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                  variant="contained"
                  sx={{ background: "#4F48E3", m: 1 }}
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  variant="contained"
                  sx={{ background: "#13BA82", m: 1 }}
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Form;
