<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />

	<xsl:template match="/ZoneList">
		<div class="container">
			<div class="block-title">
				<div class="head-title">
					<h1>
						<xsl:value-of disable-output-escaping="yes" select="ModuleTitle"></xsl:value-of>
					</h1>
				</div>
				<div class="text">
					<p>
						<xsl:value-of disable-output-escaping="yes" select="Zone/Description"></xsl:value-of>
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-12 col-md-6 col-lg-6">
					<div class="content">
						<div class="desc-home">
							<p>
								<xsl:value-of disable-output-escaping="yes" select="Zone/News/BriefContent">
								</xsl:value-of>
								<xsl:value-of select="Zone/News/EditLink" disable-output-escaping="yes">
								</xsl:value-of>
							</p>
						</div>
						<div class="btn-view-more">
							<xsl:value-of disable-output-escaping="yes" select="Zone/News/FullContent"></xsl:value-of>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-6">
					<div class="card_img">
						<div class="img">
							<img>
							<xsl:attribute name="src">
								<xsl:value-of select="Zone/News/ImageUrl"></xsl:value-of>
							</xsl:attribute>
							<xsl:attribute name="alt">
								<xsl:value-of select="Zone/News/Title"></xsl:value-of>
							</xsl:attribute>
							</img>
						</div>
					</div>
				</div>
			</div>
		</div>
	</xsl:template>

</xsl:stylesheet>