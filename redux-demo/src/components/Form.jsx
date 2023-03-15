import { Button, Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const Form = ({ open, handleClose }) => {
  console.log("open===========", open);

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
                />

                <TextField
                  className="input-box"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  className="input-box"
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                />
                <TextField
                  className="input-box"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
                <TextField
                  className="input-box"
                  id="outlined-basic"
                  label="Mobile No"
                  variant="outlined"
                />
                <TextField
                  className="input-box"
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
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
                  onClick={handleClose}
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
