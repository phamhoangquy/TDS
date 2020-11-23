<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
  <xsl:output method="html" indent="yes"/>

	<xsl:template match="/">		
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<xsl:apply-templates select="/BannerList/Banner"></xsl:apply-templates>
			</div>
		</div>
		<div class="arrow-center">
			<span class="material-icons">
				keyboard_arrow_down
			</span>
		</div>	
	
	</xsl:template>				

	<xsl:template match="Banner">
		<div class="swiper-slide">
			<div class="box-banner">
				<div class="img">
					<img>
						<xsl:attribute name="src">
							<xsl:value-of select="ImageUrl"></xsl:value-of>
						</xsl:attribute>	
						<xsl:attribute name="alt">
							<xsl:value-of disable-output-escaping="yes" select="Title"></xsl:value-of>
						</xsl:attribute>					  
					</img>
					<div class="box-text">
						<p>
							<xsl:value-of disable-output-escaping="yes" select="Title"></xsl:value-of>
						</p>
						<h2>
							<xsl:value-of disable-output-escaping="yes" select="Description"></xsl:value-of>
						</h2>
						<a>
							<xsl:attribute name="href">
							  <xsl:value-of select="Url"></xsl:value-of>
							</xsl:attribute>				
							Tìm hiểu thêm <span class="material-icons">arrow_right_alt</span>
						</a>
					</div>
				</div>
			</div>
		</div>	
	</xsl:template>

</xsl:stylesheet>