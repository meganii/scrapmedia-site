import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Grid from '@material-ui/core/Grid'
import SendIcon from '@material-ui/icons/Send'
import SearchIcon from '@material-ui/icons/Search'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <div style={{ height: '100px', display: 'inline-block' }}>
          <SendIcon style={{ width: '100%', height: '100%' }} fontSize="inherit" />
        </div>
        <div><p>書籍情報を読み取り、書影付きでScrapboxへ</p></div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div style={{ height: '100px', display: 'inline-block' }}>
          <SearchIcon style={{ width: '100%', height: '100%' }} fontSize="inherit" />
        </div>
        <div><p>手動でISBNを入力し、検索可能</p></div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div style={{ height: '100px', display: 'inline-block' }}>
          <SettingsApplicationsIcon style={{ width: '100%', height: '100%' }} fontSize="inherit" />
        </div>
        <div><p>データソースは、openBDもしくはAmazon Product Advertising APIから選択</p></div>
      </Grid>
      <Grid item xs={12}   justify="center" style={{textAlign: 'center'}}>
        <a href='https://play.google.com/store/apps/details?id=com.meganii.flutter_scrapmedia&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
          <img alt='Google Play で手に入れよう' src='https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png' layout="fixed" height="125" width="232" />
        </a>
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
