import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { createTheme } from '@mui/material/styles';

const Middle = () => {

    const theme = createTheme({
        palette: {
          primary: {
            light: '#7421fc',
            main: '#7421fc',
            dark: '#7421fc',
            contrastText: '#7421fc',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      });

    return (
        <div>
            <div className="main2 flex relative h-full">
                <div className="picture"></div>
                <div className="para2">
                    <p className="tool">COMPLETE TOOLKIT</p>
                    <h2 className="pages">Complete package for your coding journey.</h2>
                    <p className="third">Unleash your potential with interactive challenges and competitions.</p>
                    <div className="check">
                        <div className="checkIcon">
                            <CheckCircleIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />
                            <h3 className='checkText'>Comprehensive Learning Resources</h3>
                        </div>
                        <div className="checkIcon">
                            <CheckCircleIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />
                            <h3 className='checkText'>Versatile Solutions for Every Skill Level</h3>
                        </div>
                        <div className="checkIcon">
                            <CheckCircleIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />
                            <h3 className='checkText'>Efficient Learning Experience</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle;