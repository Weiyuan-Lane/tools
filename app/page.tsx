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
          <Grid container spacing={2}>

            <Grid size={12}>
              <Divider
                style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <Chip label="Tools I've built!" />
              </Divider>
            </Grid>

            <Grid size={{ sm: 12, md: 4, lg: 3 }}>
              <Card>
                <CardMedia
                  sx={{ height: '210px' }}
                  component="img"
                  image={GetUrl("/images/tool-qrcode.png")}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    QR Code Generator (free)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Generate QR code from URL or text, with logo and color customisations
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="https://weiyuan-lane.github.io/qr-code-generator">Visit</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid size={{ sm: 12, md: 4, lg: 3 }}>
              <Card>
                <CardMedia
                  sx={{ height: '210px' }}
                  component="img"
                  image={GetUrl("/images/tool-speechrecognition.png")}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Speech recognition demo
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Say a word or a sentence, and see the text appear on the screen!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="https://weiyuan-lane.github.io/web-speech-api/detect-sound">Visit</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid size={{ sm: 12, md: 4, lg: 3 }}>
              <Card>
                <CardMedia
                  sx={{ height: '210px' }}
                  component="img"
                  image={GetUrl("/images/tool-speechregcount.png")}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Word count demo
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Continue talking, and see the word count being tabulated!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="https://weiyuan-lane.github.io/web-speech-api/detect-sound/count">Visit</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid size={{ sm: 12, md: 4, lg: 3 }}>
              <Card>
                <CardMedia
                  sx={{ height: '210px' }}
                  component="img"
                  image={GetUrl("/images/tool-speechsynthesis.png")}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Speech Synthesis
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Synthesis speech from text, with voice and rate customisations
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="https://weiyuan-lane.github.io/web-speech-api/speech">Visit</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid size={{ sm: 12, md: 4, lg: 3 }}>
              <Card>
                <CardMedia
                  sx={{ height: '210px' }}
                  component="img"
                  image={GetUrl("/images/tool-recording.png")}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Audio/Video recording
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Recording audio and/or video from a different browser tab, from your mic, or camera
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="https://weiyuan-lane.github.io/web-speech-api/recorder">Visit</Link>
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
