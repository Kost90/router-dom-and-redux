import { useNavigation } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import InfoIcon from '@mui/icons-material/Info'
import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'

import { Loader } from '../../components/Loader/Loader'

const Photos = () => {
  const photos = useAppSelector((state) => state.photos.photos)

  const navigation = useNavigation()

  const isLoading = navigation.state === 'loading'

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Photos
      </Typography>
      <Grid container spacing={2}>
        {isLoading ? (
          <Loader />
        ) : (
          <ImageList cols={4} gap={16}>
            {photos.map((photo) => (
              <ImageListItem key={photo.id}>
                <img src={photo.url} alt={photo.title} width={280} height={280} />
                <ImageListItemBar
                  title={photo.title}
                  actionIcon={
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Grid>
    </>
  )
}

export { Photos }
