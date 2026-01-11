<template>
	<div class="NotFound">
		<img
			alt="Error Page"
			src="/assets/icons/error-page-icon.svg"
			width="256"
		/>
		<p class="code">404</p>
		<h1 class="title">PAGE NOT FOUND</h1>
		<div class="divider"></div>
		<blockquote class="quote">
			You are not the only one disappointed
		</blockquote>
		<a class="VPButton medium brand link" href="/overview/what-is-this"
			>Return to the Documentation</a
		>
	</div>
</template>

<style scoped>
.NotFound {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	text-align: center;
	flex: 1;
	height: 100%;
	width: 100%;

	@media (min-width: 768px) {
		padding: 96px 32px 168px;
	}
}

.code {
	line-height: 64px;
	font-size: 64px;
	font-weight: 900;
}

.title {
	padding: 12px 0 24x 0;
	letter-spacing: 2px;
	line-height: 20px;
	font-size: 20px;
	font-weight: 700;
}

.divider {
	margin: 18px auto;
	width: 320px;
	height: 2px;
	background-color: var(--vp-c-divider);
}

.quote {
	margin: 0 auto;
	font-size: 14px;
	font-weight: 500;
	margin-bottom: 12px;
	color: var(--vp-c-text-2);
}

.action {
	padding-top: 20px;
}

.link {
	display: inline-block;
	border: 1px solid var(--vp-c-brand);
	border-radius: 16px;
	padding: 3px 16px;
	font-size: 14px;
	font-weight: 500;
	color: var(--vp-c-brand);
	transition:
		border-color 0.25s,
		color 0.25s;
}

.link:hover {
	border-color: var(--vp-c-brand-dark);
	color: var(--vp-c-brand-dark);
}
</style>
