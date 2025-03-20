import React from 'react'

function card() {
  return (
    <>
  <CardMedia
    component="img"
    alt="Yosemite National Park"
    image="/static/images/cards/yosemite.jpeg"
  />
  <Stack direction="row" alignItems="center" spacing={3} p={2} useFlexGap>
    <Stack direction="column" spacing={0.5} useFlexGap>
      <Typography>Yosemite National Park, California, USA</Typography>
      <Stack direction="row" spacing={1} useFlexGap>
        <Chip
          size="small"
        
        />
        <Rating defaultValue={4} size="small" />
      </Stack>
    </Stack>
   
  </Stack>
  </>
  )
}

export default card