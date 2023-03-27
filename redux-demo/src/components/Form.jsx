import { Alert, Button, Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import axios from "axios";

const Form = ({ open, handleClose, companyApi, getData }) => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyUsername, setCompanyUsername] = useState("");
  const [companyPassword, setCompanyPassword] = useState("");
  const [companyMobileNo, setCompanyMobileNo] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyData, setCompanyData] = useState(null);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState();

  console.log(companyName);
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

  const handleSave = (e) => {
    e.preventDefault();
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
          company_name: companyName,
          company_email: companyEmail,
          company_mobile_no: companyMobileNo,
          company_username: companyUsername,
          company_password: companyPassword,
          company_address: companyAddress,
        },
        {
          headers: {
            authorization: `${mytoken}`,
          },
        }
      )
      .then((response) => {
        console.log("then=========", response.data);
        setCompanyData(response.data);
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });

    // handleClose();
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

              <form>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* <Form> */}
                  <TextField
                    className="input-box"
                    id="outlined-basic"
                    name="Name"
                    variant="outlined"
                    onChange={(e) => setCompanyName(e.target.value)}
                    value={companyName}
                    required
                  />

                  {<Alert severity="error">Enter Correct Email</Alert>}

                  <TextField
                    className="input-box"
                    id="outlined-basic"
                    name="Email"
                    variant="outlined"
                    onChange={(e) => setCompanyEmail(e.target.value)}
                    value={companyEmail}
                  />
                  {error ? (
                    <Alert severity="error">Enter Correct Email</Alert>
                  ) : (
                    ""
                  )}

                  <TextField
                    className="input-box"
                    id="outlined-basic"
                    name="Username"
                    variant="outlined"
                    onChange={(e) => setCompanyUsername(e.target.value)}
                    value={companyUsername}
                  />
                  <TextField
                    className="input-box"
                    id="outlined-basic"
                    name="Password"
                    variant="outlined"
                    onChange={(e) => setCompanyPassword(e.target.value)}
                    value={companyPassword}
                  />
                  <TextField
                    className="input-box"
                    id="outlined-basic"
                    name="MobileNo"
                    variant="outlined"
                    onChange={(e) => setCompanyMobileNo(e.target.value)}
                    value={companyMobileNo}
                  />
                  <TextField
                    className="input-box"
                    id="outlined-basic"
                    name="Address"
                    variant="outlined"
                    onChange={(e) => setCompanyAddress(e.target.value)}
                    value={companyAddress}
                  />
                  {/* </Form> */}
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
              </form>
            </Box>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default Form;
