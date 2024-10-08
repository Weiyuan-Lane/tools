import GetUrl from '@/helpers/GetUrl';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Grid2 as Grid,
  Box,
  Divider,
  Chip,
  CardActions,
} from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <Box sx={{
          mx: 'auto',
          paddingTop: '25px',
          paddingLeft: '10px',
          paddingRight: '10px',
          width: '100%',
          '@media (min-width: 769px)' : {
            width: '80%'
          }
        }}>
          <Grid container rowSpacing={1}>

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Tools I've built!" />
              </Divider>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={GetUrl("/images/tool-qrcode.png")}
                >
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    QR Code Generator
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Generate QR code from URL or text, with logo and color customisations
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="https://weiyuan-lane.github.io/qr-code-generator/">Visit</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </main>
    </div>
  );
}
